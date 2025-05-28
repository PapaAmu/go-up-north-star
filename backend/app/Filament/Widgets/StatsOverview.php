<?php

namespace App\Filament\Widgets;

use App\Models\AccountApplication;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        $pending = AccountApplication::where('status', 'pending')->count();
        $approved = AccountApplication::where('status', 'approved')->count();
        $rejected = AccountApplication::where('status', 'rejected')->count();

        return [
            Stat::make('Pending Applications', $pending)
                ->description('Applications awaiting review')
                ->descriptionIcon('heroicon-m-clock')
                ->color('warning'),

            Stat::make('Approved Applications', $approved)
                ->description('All approved applications')
                ->descriptionIcon('heroicon-m-check-badge')
                ->color('success'),

            Stat::make('Rejected Applications', $rejected)
                ->description('Applications that were rejected')
                ->descriptionIcon('heroicon-m-x-circle')
                ->color('danger'),
        ];
    }
}
