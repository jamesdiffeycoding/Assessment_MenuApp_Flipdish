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

type TMenuItemMetadata = {
  key: string;
  value: string;
};

type TMenuItemOptionSet = {
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

export type TMenuSection = TMenuSectionItem[];

export type TMenuSectionItem = {
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

export type TMenuSectionAvailability = {
  MenuSectionId: number;
  AvailableTimes: TAvailableTime[] | null;
  AvailabilityMode: number;
};

export type TAvailableTime = {
  BusinessHoursPeriodId: number;
  DayOfWeek: number;
  StartTime: string;
  Period: string;
  StartTimeEarly: string;
  PeriodEarly: string;
};

export type TMenuContext = {
  handleSectionClick: (categoryId: string, collapseOthers: boolean) => void;
  visibleSections: string[];
  MenuSections: TMenuSection;
};
