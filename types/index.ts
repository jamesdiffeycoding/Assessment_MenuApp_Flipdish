// This file contains types for the fetched menu object sorted by nest depth level.

/* __________________ Nest Level 0 __________________ */

// The whole menu
export type TMenu = {
  ConcessionStores?: any[]; // unsure of type
  DisplaySectionLinks?: boolean;
  MenuId?: number;
  MenuSectionBehaviour?: number;
  MenuSections: TMenuSectionsArray;
  MenuVersionNumber?: number;
  VersionGuid?: string;
};

/* __________________ Nest Level 1 __________________ */

export type TMenuSectionsArray = TMenuSectionHeading[];

/* __________________ Nest Level 2 __________________ */

// example: "demo", "mains", "desserts", "drinks"
export type TMenuSectionHeading = {
  CellAspectRatio: number;
  CellLayoutType: number;
  ConcessionStoreId: string | null;
  Description: string | null;
  DisplayOrder: number;
  ImageName: string | null;
  ImageUrl: string | null;
  IsAvailable: boolean;
  IsDeleted: boolean;
  IsHiddenFromUsers: boolean;
  MenuItems: TMenuItem[];
  MenuSectionAvailability: TMenuSectionAvailability;
  MenuSectionId: number;
  MenuSectionMetadata: TMenuItemMetadata[];
  Name: string;
  PublicId: string;
};

/* __________________ Nest Level 3 __________________ */

// Nest 3 - example: salad, chips, curry, burger
export type TMenuItem = {
  ActualPrice: number;
  Alcohol: boolean;
  CellAspectRatio: number;
  CellLayoutType: number;
  Description: string | null;
  DisableVouchers: boolean;
  DisplayOrder: number;
  ExcludeFromVoucherDiscounting: boolean;
  ImageName: string | null;
  ImageUrl: string | null;
  IsAvailable: boolean;
  IsDeleted: boolean;
  MenuItemId: number;
  Name: string;
  Price: number;
  PublicId: string;
  SpicinessRating: number | null;
  Tags: string[];
  TaxRateId: number | null;
  TaxValue: number;
  MenuItemOptionSets: TMenuItemOptionSet[];
  MenuSectionId: number;
  PriceCanIncrease: boolean;
  DailySpecialHours: string[];
  MenuItemMetadata: TMenuItemMetadata[];
};

export type TMenuSectionAvailability = {
  MenuSectionId: number;
  AvailableTimes: TAvailableTime[] | null;
  AvailabilityMode: number;
};

/* __________________ Nest Level 4 __________________ */

// example: "sizes", "sauces"
export type TMenuItemOptionSet = {
  MenuItemOptionSetId: number;
  Name: string | null;
  IsMasterOptionSet: boolean;
  DisplayOrder: number;
  MinSelectCount: number;
  MaxSelectCount: number;
  IsDeleted: boolean;
  PublicId: string;
  MenuItemOptionSetItems: TMenuItemOptionSetItem[];
  ImageName: string | null;
  ImageUrl: string | null;
  CellAspectRatio: number;
  CellLayoutType: number;
  MinPrice?: number;
  Price?: number;
  TaxRateId?: number | null;
  TaxValue?: number;
  MenuItemOptionSetMetadata: TMenuItemMetadata[];
};

type TMenuItemMetadata = {
  key: string;
  value: string;
};

export type TAvailableTime = {
  BusinessHoursPeriodId: number;
  DayOfWeek: number;
  StartTime: string;
  Period: string;
  StartTimeEarly: string;
  PeriodEarly: string;
};

/* __________________ Nest Level 5 __________________ */

// examples: "small", "medium", "large", "Corona", "Heineken", "Guinness", "BBQ", "blue cheese"
type TMenuItemOptionSetItem = {
  MenuItemOptionSetItemId: number;
  Name: string;
  Price: number;
  TaxRateId: number | null;
  TaxRate: string | null;
  TaxValue: number;
  IsAvailable: boolean;
  DisplayOrder: number;
  IsDeleted: boolean;
  Tags: string[];
  NextMenuItemOptionSetId: number | null;
  PublicId: string;
  ImageName: string | null;
  ImageUrl: string | null;
  CellAspectRatio: number;
  CellLayoutType: number;
  OptionSetItemMetadata: TMenuItemMetadata[];
};
