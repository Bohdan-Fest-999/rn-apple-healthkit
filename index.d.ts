declare module "rn-apple-healthkit" {
    export interface HealthKitPermissions {
        permissions: {
            read: string[];
            write: string[];
        }
    }

    export interface MindfulSessionData {
        startDate?: Date,
        endDate?: Date,
        limit?: number
    }

    export interface DateObject {
        date: string | null,
    }

    export interface DateRange {
        startDate: Date,
        endDate?: Date | null | undefined, // optional; default now
    }

    export interface DailyDistanceOptions extends DateRange {
        ascending?: boolean | undefined, // default false
        limit?: number | undefined,      // default no limit
    }

    export interface DistanceOptions extends DateRange {
        unit?: string | undefined, // default 'meter'
        date?: Date | undefined, // default now
    }

    export interface AppleHealthKit {
        initHealthKit(permissions: HealthKitPermissions, callback: (error: string, result: Object) => void): void
        saveFood(options: Object, callback: (error: string, result: Object) => void): void
        isAvailable(callback: (error: Object, results: boolean) => void): void
        getDateOfBirth(options: any, callback: (error: Object, results: HealthDateOfBirth) => void): void
        getLatestHeight(options: HealthUnitOptions, callback: (err: string, results: HealthValue) => void): void
        getLatestWeight(options: HealthUnitOptions, callback: (err: string, results: HealthValue) => void): void
        getMindfulSession(options: MindfulSessionData, callback: (err: string, results: HealthValue) => void): void
        getStepCount(options: DateObject, callback: (err: string, results: HealthValue) => void): void
        getActiveEnergyBurned(dateRange: DateRange, callback: (error: Object, result: any) => void)
        getBasalEnergyBurned(dateRange: DateRange, callback: (error: Object, result: any) => void)
        getDailyStepCountSamples(dateRange: DateRange, callback: (error: Object, result: Array<any>) => void)
        getDailyDistanceCyclingSamples(dateRange: DailyDistanceOptions, callback: (error: Object, results: Array<any>) => void)
        getDailyDistanceWalkingRunningSamples(dateRange: DailyDistanceOptions, callback: (error: Object, results: Array<any>) => void)
        getDailyFlightsClimbedSamples(dateRange: DailyDistanceOptions, callback: (error: Object, results: Array<any>) => void)
        getDistanceCycling(dateRange: DistanceOptions | undefined, callback: (error: Object, results: any) => void)
        getDistanceWalkingRunning(dateRange: DistanceOptions | undefined, callback: (error: Object, results: any) => void)
        getFlightsClimbed(date: DateObject, callback: (error: Object, result: any) => void)
    }

    export interface HealthDateOfBirth {
        value: string;
        age: number;
    }

    export interface HealthValue {
        value: number;
        startDate: string;
        endDate: string;
    }

    export interface HealthUnitOptions {
        unit: HealthUnit;
    }
    export enum HealthUnit {
        bpm = "bpm",
        calorie = "calorie",
        celsius = "celsius",
        count = "count",
        day = "day",
        fahrenheit = "fahrenheit",
        foot = "foot",
        gram = "gram",
        hour = "hour",
        inch = "inch",
        joule = "joule",
        meter = "meter",
        mgPerdL = "mgPerdL",
        mile = "mile",
        minute = "minute",
        mmhg = "mmhg",
        mmolPerL = "mmolPerL",
        percent = "percent",
        pound = "pound",
        second = "second"
    }

    const appleHealthKit: AppleHealthKit;
    export default appleHealthKit;
}
