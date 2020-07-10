declare module "rn-apple-healthkit" {

    export interface HealthKitPermissions {
        permissions: {
            read: HealthPermissions[],
            write: HealthPermissions[],
        }
    }

    export interface MindfulSessionData {
        startDate?: Date,
        endDate?: Date,
        limit?: number
    }

    export interface DateObject {
        date: string | undefined,
    }

    export interface DateRange {
        startDate: string,
        endDate?: string | null | undefined, // optional; default now
    }

    export interface DailyDistanceOptions extends DateRange {
        ascending?: boolean | undefined, // default false
        limit?: number | undefined,      // default no limit
    }

    export interface DistanceOptions {
        unit?: string | undefined, // default 'meter'
        date?: string | undefined, // default now
    }

    export interface HKError {
        code?: string | undefined,
        message?: string | undefined,
    }

    export interface HealthDateOfBirth {
        value: string,
        age: number,
    }

    export interface HealthValue {
        value: number,
        startDate: string,
        endDate: string,
    }

    export interface HealthUnitOptions {
        unit: HealthUnit,
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

    export interface HealthPermissions { 
        ActiveEnergyBurned: "ActiveEnergyBurned",
        AppleExerciseTime: "AppleExerciseTime",
        BasalEnergyBurned: "BasalEnergyBurned",
        BiologicalSex: "BiologicalSex",
        BloodGlucose: "BloodGlucose",
        BloodPressureDiastolic: "BloodPressureDiastolic",
        BloodPressureSystolic: "BloodPressureSystolic",
        BodyFatPercentage: "BodyFatPercentage",
        BodyMass: "BodyMass",
        BodyMassIndex: "BodyMassIndex",
        BodyTemperature: "BodyTemperature",
        DateOfBirth: "DateOfBirth",
        Biotin: "Biotin",
        Caffeine: "Caffeine",
        Calcium: "Calcium",
        Carbohydrates: "Carbohydrates",
        Chloride: "Chloride",
        Cholesterol: "Cholesterol",
        Copper: "Copper",
        EnergyConsumed: "EnergyConsumed",
        FatMonounsaturated: "FatMonounsaturated",
        FatPolyunsaturated: "FatPolyunsaturated",
        FatSaturated: "FatSaturated",
        FatTotal: "FatTotal",
        Fiber: "Fiber",
        Folate: "Folate",
        Iodine: "Iodine",
        Iron: "Iron",
        Magnesium: "Magnesium",
        Manganese: "Manganese",
        Molybdenum: "Molybdenum",
        Niacin: "Niacin",
        PantothenicAcid: "PantothenicAcid",
        Phosphorus: "Phosphorus",
        Potassium: "Potassium",
        Protein: "Protein",
        Riboflavin: "Riboflavin",
        Selenium: "Selenium",
        Sodium: "Sodium",
        Sugar: "Sugar",
        Thiamin: "Thiamin",
        VitaminA: "VitaminA",
        VitaminB12: "VitaminB12",
        VitaminB6: "VitaminB6",
        VitaminC: "VitaminC",
        VitaminD: "VitaminD",
        VitaminE: "VitaminE",
        VitaminK: "VitaminK",
        Zinc: "Zinc",
        Water: "Water",
        DistanceCycling: "DistanceCycling",
        DistanceSwimming: "DistanceSwimming",
        DistanceWalkingRunning: "DistanceWalkingRunning",
        FlightsClimbed: "FlightsClimbed",
        HeartRate: "HeartRate",
        Height: "Height",
        LeanBodyMass: "LeanBodyMass",
        MindfulSession: "MindfulSession",
        NikeFuel: "NikeFuel",
        RespiratoryRate: "RespiratoryRate",
        SleepAnalysis: "SleepAnalysis",
        StepCount: "StepCount",
        Steps: "Steps",
        Weight: "Weight",
        Workout: "Workout"
    }

    export interface AppleHealthKit {
        Constants: {
            Permissions: HealthPermissions,
            Units: HealthUnit,
        },
        initHealthKit(permissions: HealthKitPermissions, callback: (error: string, result: Object) => void): void
        saveFood(options: Object, callback: (error: string, result: Object) => void): void
        isAvailable(callback: (error: Object, results: boolean) => void): void
        getDateOfBirth(options: any, callback: (error: HKError, results: HealthDateOfBirth) => void): void
        getLatestHeight(options: HealthUnitOptions, callback: (err: string, results: HealthValue) => void): void
        getLatestWeight(options: HealthUnitOptions, callback: (err: string, results: HealthValue) => void): void
        getMindfulSession(options: MindfulSessionData, callback: (err: string, results: HealthValue) => void): void
        getStepCount(options: DateObject, callback: (err: string, results: HealthValue) => void): void
        getActiveEnergyBurned(dateRange: DateRange, callback: (error: HKError, result: HealthValue) => void): void
        getBasalEnergyBurned(dateRange: DateRange, callback: (error: HKError, result: any) => void): void
        getDailyStepCountSamples(dateRange: DateRange, callback: (error: HKError, result: Array<HealthValue>) => void): void
        getDailyDistanceCyclingSamples(dateRange: DailyDistanceOptions, callback: (error: HKError, results: Array<HealthValue>) => void): void
        getDailyDistanceWalkingRunningSamples(dateRange: DailyDistanceOptions, callback: (error: HKError, results: Array<HealthValue>) => void): void
        getDailyFlightsClimbedSamples(dateRange: DailyDistanceOptions, callback: (error: HKError, results: Array<HealthValue>) => void): void
        getDistanceCycling(dateRange: DistanceOptions | undefined, callback: (error: HKError, results: HealthValue) => void): void
        getDistanceWalkingRunning(dateRange: DistanceOptions | undefined, callback: (error: HKError, results: HealthValue) => void): void
        getFlightsClimbed(date: DateObject, callback: (error: HKError, result: HealthValue) => void): void
    }

    const appleHealthKit: AppleHealthKit;
    export default appleHealthKit;
}
