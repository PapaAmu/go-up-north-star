<?php

namespace App\Filament\Widgets;

use App\Models\AccountApplication;
use App\Models\Membership;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Carbon;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        // Totals
        $totalApplications = AccountApplication::count();
        $totalMemberships = Membership::count();

        // Pending
        $pendingApplications = AccountApplication::where('status', 'pending')->count();
        $pendingMemberships = Membership::where('status', 'pending')->count();

        // Approved
        $approvedApplications = AccountApplication::where('status', 'approved')->count();
        $approvedMemberships = Membership::where('status', 'approved')->count();

        // Trends (last 7 days)
        $applicationTrend = Trend::model(AccountApplication::class)
            ->between(Carbon::now()->subDays(7), Carbon::now())
            ->perDay()
            ->count();

        $membershipTrend = Trend::model(Membership::class)
            ->between(Carbon::now()->subDays(7), Carbon::now())
            ->perDay()
            ->count();

        // Filtered trends
        $pendingApplicationTrend = Trend::model(AccountApplication::class)
            ->between(Carbon::now()->subDays(7), Carbon::now())
            ->perDay()
            ->count('id', 'count', fn ($query) => $query->where('status', 'pending'));

        $pendingMembershipTrend = Trend::model(Membership::class)
            ->between(Carbon::now()->subDays(7), Carbon::now())
            ->perDay()
            ->count('id', 'count', fn ($query) => $query->where('status', 'pending'));

        $approvedApplicationTrend = Trend::model(AccountApplication::class)
            ->between(Carbon::now()->subDays(7), Carbon::now())
            ->perDay()
            ->count('id', 'count', fn ($query) => $query->where('status', 'approved'));

        $approvedMembershipTrend = Trend::model(Membership::class)
            ->between(Carbon::now()->subDays(7), Carbon::now())
            ->perDay()
            ->count('id', 'count', fn ($query) => $query->where('status', 'approved'));

        // Map to data arrays
        $applicationTrendData = collect($applicationTrend)->map(fn (TrendValue $value) => $value->aggregate)->toArray();
        $membershipTrendData = collect($membershipTrend)->map(fn (TrendValue $value) => $value->aggregate)->toArray();

        $pendingApplicationTrendData = collect($pendingApplicationTrend)->map(fn (TrendValue $value) => $value->aggregate)->toArray();
        $pendingMembershipTrendData = collect($pendingMembershipTrend)->map(fn (TrendValue $value) => $value->aggregate)->toArray();

        $approvedApplicationTrendData = collect($approvedApplicationTrend)->map(fn (TrendValue $value) => $value->aggregate)->toArray();
        $approvedMembershipTrendData = collect($approvedMembershipTrend)->map(fn (TrendValue $value) => $value->aggregate)->toArray();

        return [
            Stat::make('Total Applications', $totalApplications + $totalMemberships)
                ->description("{$totalApplications} Applications, {$totalMemberships} Memberships")
                ->descriptionIcon('heroicon-m-clipboard-document-list')
                ->color('primary')
                ->chart(array_merge($applicationTrendData, $membershipTrendData)),

            Stat::make('All Pending Review', $pendingApplications + $pendingMemberships)
                ->description("{$pendingApplications} Applications, {$pendingMemberships} Memberships")
                ->descriptionIcon('heroicon-m-clock')
                ->color('warning')
                ->chart(array_merge($pendingApplicationTrendData, $pendingMembershipTrendData)),

            Stat::make('Total Approvals', $approvedApplications + $approvedMemberships)
                ->description("{$approvedApplications} Applications, {$approvedMemberships} Memberships")
                ->descriptionIcon('heroicon-m-check-badge')
                ->color('success')
                ->chart(array_merge($approvedApplicationTrendData, $approvedMembershipTrendData)),
        ];
    }

    protected function getColumns(): int
    {
        return 3;
    }
}
