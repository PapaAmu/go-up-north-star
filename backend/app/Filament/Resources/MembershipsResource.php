<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MembershipsResource\Pages;
use App\Models\Membership;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class MembershipsResource extends Resource
{
    protected static ?string $model = Membership::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Applications';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('first_name')
                ->required()
                ->maxLength(50),

            Forms\Components\TextInput::make('last_name')
                ->required()
                ->maxLength(50),

            Forms\Components\TextInput::make('email')
                ->email()
                ->required(),

            Forms\Components\TextInput::make('phone')
                ->required(),

            Forms\Components\Radio::make('id_type')
                ->options([
                    'ID' => 'South African ID',
                    'Passport' => 'Passport',
                ])
                ->inline()
                ->required(),

            Forms\Components\TextInput::make('id_number')
                ->required(),

            Forms\Components\TextInput::make('shares')
                ->numeric()
                ->required()
                ->minValue(10),

            Forms\Components\FileUpload::make('proof_of_payment_path')
                ->label('Proof of Payment')
                ->directory('membership-proof')
                ->downloadable()
                ->previewable()
                ->preserveFilenames(),

            Forms\Components\Toggle::make('accepted_terms')
                ->label('Accepted Terms & Conditions'),

            Forms\Components\Toggle::make('read_terms')
                ->label('Read Terms & Conditions'),

            Forms\Components\Select::make('status')
                ->options([
                    'pending' => 'Pending',
                    'approved' => 'Approved',
                    'rejected' => 'Rejected',
                ])
                ->required()
                ->default('pending'),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('first_name')->searchable(),
                Tables\Columns\TextColumn::make('last_name')->searchable(),
                Tables\Columns\TextColumn::make('email')->searchable(),
                Tables\Columns\TextColumn::make('phone'),
                Tables\Columns\TextColumn::make('id_type'),
                Tables\Columns\TextColumn::make('id_number'),
                Tables\Columns\TextColumn::make('shares'),
                Tables\Columns\IconColumn::make('accepted_terms')
                    ->boolean(),
                Tables\Columns\IconColumn::make('read_terms')
                    ->boolean(),
                Tables\Columns\BadgeColumn::make('status')
                    ->colors([
                        'warning' => 'pending',
                        'success' => 'approved',
                        'danger' => 'rejected',
                    ])
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->label('Submitted'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'pending' => 'Pending',
                        'approved' => 'Approved',
                        'rejected' => 'Rejected',
                    ]),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMemberships::route('/'),
            'create' => Pages\CreateMemberships::route('/create'),
            'edit' => Pages\EditMemberships::route('/{record}/edit'),
        ];
    }
}
