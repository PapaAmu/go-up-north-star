<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FileResource\Pages;
use App\Models\File;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;
use Filament\Forms;
use Filament\Tables;
use Illuminate\Support\Facades\Storage;

class FileResource extends Resource
{
    protected static ?string $model = File::class;

    protected static ?string $navigationIcon = 'heroicon-o-paper-clip';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\FileUpload::make('path')
                    ->label('Upload File')
                    ->directory('uploads/files')
                    ->preserveFilenames()
                    ->storeFileNamesIn('filename')
                    ->getUploadedFileNameForStorageUsing(fn ($file) => $file->getClientOriginalName())
                    ->required(),

                Forms\Components\Select::make('category')
                    ->label('Category')
                    ->options([
                        'documents' => 'Documents',
                        'images' => 'Images',
                        'videos' => 'Videos',
                        'archives' => 'Archives',
                        'others' => 'Others',
                    ])
                    ->searchable()
                    ->required(),

                Forms\Components\Hidden::make('type')
                    ->afterStateUpdated(function ($state, callable $set, $get) {
                        if ($get('path')) {
                            $storagePath = storage_path('app/public/' . $get('path'));
                            if (file_exists($storagePath)) {
                                $set('type', mime_content_type($storagePath));
                            }
                        }
                    }),

                Forms\Components\Hidden::make('size')
                    ->afterStateUpdated(function ($state, callable $set, $get) {
                        if ($get('path')) {
                            $storagePath = storage_path('app/public/' . $get('path'));
                            if (file_exists($storagePath)) {
                                $set('size', filesize($storagePath));
                            }
                        }
                    }),

                Forms\Components\Hidden::make('uploaded_by')
                    ->default(auth()->id())
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('filename')->label('Filename'),

                Tables\Columns\BadgeColumn::make('category')
                    ->colors([
                        'primary' => 'documents',
                        'info' => 'images',
                        'success' => 'videos',
                        'warning' => 'archives',
                        'gray' => 'others',
                    ]),

                Tables\Columns\TextColumn::make('type')->label('Type'),

                Tables\Columns\TextColumn::make('size')
                    ->label('Size')
                    ->formatStateUsing(function ($state) {
                        if (!$state) return '0 B';
                        $units = ['B', 'KB', 'MB', 'GB'];
                        $power = $state > 0 ? floor(log($state, 1024)) : 0;
                        return round($state / (1024 ** $power), 2) . ' ' . $units[$power];
                    }),

                Tables\Columns\TextColumn::make('user.name')->label('Uploaded By'),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Uploaded At')
                    ->dateTime(),

                Tables\Columns\TextColumn::make('path')
                    ->label('Preview / Download')
                    ->formatStateUsing(function ($state) {
                        $url = Storage::url($state);
                        $ext = pathinfo($url, PATHINFO_EXTENSION);

                        if (in_array(strtolower($ext), ['jpg', 'jpeg', 'png', 'gif'])) {
                            return '<img src="' . $url . '" style="max-height: 60px;" />';
                        }

                        if (strtolower($ext) === 'pdf') {
                            return '<a href="' . $url . '" target="_blank">Preview PDF</a>';
                        }

                        return '<a href="' . $url . '" target="_blank">Download</a>';
                    })
                    ->html(),
            ])
            ->filters([]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFiles::route('/'),
            'create' => Pages\CreateFile::route('/create'),
            'edit' => Pages\EditFile::route('/{record}/edit'),
        ];
    }
}
