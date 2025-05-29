<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ApplicationsResource\Pages;
use App\Models\AccountApplication;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Filament\Forms;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Carbon;

class ApplicationsResource extends Resource
{
    protected static ?string $model = AccountApplication::class;
     protected static ?string $navigationIcon = 'heroicon-o-user-plus';
    protected static ?string $navigationGroup = 'Customer Applications';
    protected static ?string $navigationLabel = 'Account Applications';

     public static function getNavigationBadge(): ?string
    {
        $count = AccountApplication::where('status', 'pending')->count();
        return $count > 0 ? (string) $count : null;
    }

    public static function getNavigationBadgeColor(): string
    {
        $count = AccountApplication::where('status', 'pending')->count();

        return $count >= 5 ? 'danger' : 'warning';
    }

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('first_name')->required(),
            Forms\Components\TextInput::make('last_name')->required(),
            Forms\Components\TextInput::make('phone')->required(),
            Forms\Components\TextInput::make('email')->email()->required(),
            Forms\Components\Select::make('id_type')
                ->options([
                    'id' => 'South African ID',
                    'passport' => 'Passport',
                ])
                ->required(),
            Forms\Components\TextInput::make('id_number')->required(),
            // Add file upload for ID Copy (REQUIRED)
            Forms\Components\FileUpload::make('id_copy_path')
                ->label('ID Copy')
                ->directory('id_copies')
                ->required()
                ->downloadable()
                ->previewable()
                ->openable(),
            // Add file upload for Proof of Address (OPTIONAL)
            Forms\Components\FileUpload::make('poa_path')
                ->label('Proof of Address')
                ->directory('proof_of_address')
                ->required(false)
                ->downloadable()
                ->previewable()
                ->openable(),
            Forms\Components\Select::make('status')
                ->options([
                    'pending' => 'Pending',
                    'approved' => 'Approved',
                    'rejected' => 'Rejected',
                ])
                ->required(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('first_name')
                    ->sortable()
                    ->searchable()
                    ->limit(20)
                    ->tooltip(fn($state) => $state)
                    ->toggleable(),
                TextColumn::make('last_name')
                    ->sortable()
                    ->searchable()
                    ->limit(20)
                    ->tooltip(fn($state) => $state)
                    ->toggleable(),
                TextColumn::make('phone')
                    ->toggleable(),
                TextColumn::make('email')
                    ->searchable()
                    ->limit(25)
                    ->tooltip(fn($state) => $state)
                    ->toggleable(),
                TextColumn::make('id_type')
                    ->label('ID Type')
                    ->toggleable(),
                TextColumn::make('id_number')
                    ->label('ID Number')
                    ->limit(20)
                    ->tooltip(fn($state) => $state)
                    ->toggleable(),
                TextColumn::make('status')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'approved' => 'success',
                        'rejected' => 'danger',
                        'pending' => 'warning',
                        default => 'gray',
                    })
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('created_at')
                    ->label('Submitted')
                    ->dateTime('M j, Y H:i')
                    ->sortable()
                    ->toggleable(),
                IconColumn::make('id_copy_path')
                    ->label('ID Copy')
                    ->icon(fn($state) => $state ? 'heroicon-o-arrow-top-right-on-square' : 'heroicon-o-x-circle')
                    ->url(fn($record) => $record->id_copy_path ? asset('storage/' . $record->id_copy_path) : null)
                    ->openUrlInNewTab()
                    ->color(fn($state) => $state ? 'primary' : 'gray'),
                IconColumn::make('poa_path')
                    ->label('Proof of Address')
                    ->icon(fn($state) => $state ? 'heroicon-o-arrow-top-right-on-square' : 'heroicon-o-x-circle')
                    ->url(fn($record) => $record->poa_path ? asset('storage/' . $record->poa_path) : null)
                    ->openUrlInNewTab()
                    ->color(fn($state) => $state ? 'primary' : 'gray'),
            ])
            ->filters([
                SelectFilter::make('status')
                    ->options([
                        'pending' => 'Pending',
                        'approved' => 'Approved',
                        'rejected' => 'Rejected',
                    ]),
                Filter::make('Submitted Today')
                    ->query(fn(Builder $query): Builder =>
                        $query->whereDate('created_at', Carbon::today())),
                Filter::make('This Week')
                    ->query(fn(Builder $query): Builder =>
                        $query->whereBetween('created_at', [
                            Carbon::now()->startOfWeek(),
                            Carbon::now()->endOfWeek(),
                        ])),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ])
            ->emptyStateHeading('No applications yet')
            ->emptyStateDescription('As customers submit their application forms, they will appear here.');
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListApplications::route('/'),
            'create' => Pages\CreateApplications::route('/create'),
            'edit' => Pages\EditApplications::route('/{record}/edit'),
        ];
    }
}
