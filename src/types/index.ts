export type Menu = {
  ConcessionStores?: any[];
  DisplaySectionLinks?: boolean;
  MenuId?: number;
  MenuSectionBehaviour?: number;
  MenuSections: MenuSectionHeading[];
  MenuVersionNumber?: number;
  VersionGuid?: string;
};

export type MenuSectionHeading = {
  Name: string; // example: "demo", "mains", "desserts", "drinks"
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
  MenuItems: MenuItem[];
  MenuSectionAvailability: MenuSectionAvailability;
  MenuSectionId: number;
  MenuSectionMetadata: MenuItemMetadata[];
  PublicId: string;
};

export type MenuItem = {
  Name: string; // example: salad, chips, curry, burger
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
  Price: number;
  PublicId: string;
  SpicinessRating: number | null;
  Tags: string[];
  TaxRateId: number | null;
  TaxValue: number;
  MenuItemOptionSets: MenuItemOptionSet[];
  MenuSectionId: number;
  PriceCanIncrease: boolean;
  DailySpecialHours: string[];
  MenuItemMetadata: MenuItemMetadata[];
};

type MenuSectionAvailability = {
  MenuSectionId: number;
  AvailableTimes: AvailableTime[] | null;
  AvailabilityMode: number;
};

export type MenuItemOptionSet = {
  Name: string | null; // example: "sizes", "sauces"
  MenuItemOptionSetId: number;
  IsMasterOptionSet: boolean;
  DisplayOrder: number;
  MinSelectCount: number;
  MaxSelectCount: number;
  IsDeleted: boolean;
  PublicId: string;
  MenuItemOptionSetItems: MenuItemOptionSetItem[];
  ImageName: string | null;
  ImageUrl: string | null;
  CellAspectRatio: number;
  CellLayoutType: number;
  MinPrice?: number;
  Price?: number;
  TaxRateId?: number | null;
  TaxValue?: number;
  MenuItemOptionSetMetadata: MenuItemMetadata[];
};

type MenuItemMetadata = {
  key: string;
  value: string;
};

type AvailableTime = {
  BusinessHoursPeriodId: number;
  DayOfWeek: number;
  StartTime: string;
  Period: string;
  StartTimeEarly: string;
  PeriodEarly: string;
};

type MenuItemOptionSetItem = {
  Name: string; // examples: "small", "medium", "large", "Corona", "Heineken", "Guinness", "BBQ", "blue cheese"
  MenuItemOptionSetItemId: number;
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
  OptionSetItemMetadata: MenuItemMetadata[];
};
