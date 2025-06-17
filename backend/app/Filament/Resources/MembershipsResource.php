<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MembershipsResource\Pages;
use App\Models\Membership;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;
use Filament\Forms;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;

class MembershipsResource extends Resource
{
    protected static ?string $model = Membership::class;
    protected static ?string $navigationIcon = 'heroicon-o-user-group';

    public static function getNavigationBadge(): ?string
    {
        $count = Membership::where('status', 'pending')->count();
        return $count > 0 ? (string) $count : null;
    }

    public static function getNavigationBadgeColor(): string
    {
        $count = Membership::where('status', 'pending')->count();
        return $count >= 5 ? 'danger' : 'warning';
    }

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('first_name')->required()->maxLength(50),
            Forms\Components\TextInput::make('last_name')->required()->maxLength(50),
            Forms\Components\TextInput::make('email')->email()->required(),
            Forms\Components\TextInput::make('phone')->required(),
            Forms\Components\Radio::make('id_type')->options([
                'ID' => 'South African ID',
                'Passport' => 'Passport',
            ])->inline()->required(),
            Forms\Components\TextInput::make('id_number')->required(),
            Forms\Components\TextInput::make('gender')->required(),
            Forms\Components\TextInput::make('profession')->required(),
            Forms\Components\TextInput::make('occupation')->required(),
            Forms\Components\TextInput::make('shares')->numeric()->required()->minValue(10),
            Forms\Components\TextInput::make('monthly_savings')->numeric()->required(),
            Forms\Components\TextInput::make('qualification')->required(),
            Forms\Components\TextInput::make('physical_address')->required(),
            Forms\Components\TextInput::make('postal_address')->required(),
            Forms\Components\TextInput::make('inviter_name')->required(),
            Forms\Components\TextInput::make('beneficiary_full_name')->required(),
            Forms\Components\TextInput::make('beneficiary_id_number')->required(),
            Forms\Components\TextInput::make('beneficiary_relationship')->required(),
            Forms\Components\TextInput::make('beneficiary_phone')->required(),
            Forms\Components\TextInput::make('beneficiary_email')->email()->required(),
            Forms\Components\FileUpload::make('id_copy_path')
                ->label('ID Copy')
                ->directory('id_copies')
                ->downloadable()
                ->previewable()
                ->preserveFilenames(),
            Forms\Components\FileUpload::make('proof_of_address_path')
                ->label('Proof of Address')
                ->directory('proofs_of_address')
                ->downloadable()
                ->previewable()
                ->preserveFilenames(),
            Forms\Components\Toggle::make('terms_accepted')
                ->label('Accepted Terms & Conditions')->required(),
            Forms\Components\Toggle::make('popi_accepted')
                ->label('POPI Consent')->required(),
            Forms\Components\Select::make('status')
                ->options([
                    'pending' => 'Pending',
                    'in_progress' => 'In Progress',
                    'approved' => 'Approved',
                    'declined' => 'Declined',
                ])->required()->default('pending'),
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
                Tables\Columns\TextColumn::make('gender'),
                Tables\Columns\TextColumn::make('profession'),
                Tables\Columns\TextColumn::make('occupation'),
                Tables\Columns\TextColumn::make('shares'),
                Tables\Columns\TextColumn::make('monthly_savings'),
                Tables\Columns\TextColumn::make('qualification'),
                Tables\Columns\TextColumn::make('inviter_name'),
                Tables\Columns\IconColumn::make('terms_accepted')->boolean(),
                Tables\Columns\IconColumn::make('popi_accepted')->boolean(),
                Tables\Columns\BadgeColumn::make('status')->colors([
                    'warning' => 'pending',
                    'info' => 'in_progress',
                    'success' => 'approved',
                    'danger' => 'declined',
                ])->sortable(),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->label('Submitted'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')->options([
                    'pending' => 'Pending',
                    'in_progress' => 'In Progress',
                    'approved' => 'Approved',
                    'declined' => 'Declined',
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
