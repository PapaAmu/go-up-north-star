<?php

namespace App\Filament\Actions;

use Filament\Tables\Actions\Action;
use Illuminate\Support\Facades\Storage;

class DownloadFileAction extends Action
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->label('Download');
        $this->color('success');
        $this->url(function ($record) {
            return Storage::url($record->path);
        });
    }
}