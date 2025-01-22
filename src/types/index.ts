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
  PublicId: string;
  NextMenuItemOptionSetId: number | null;
  ImageName: string | null;
  ImageUrl: string | null;
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
  MenuSectionAvailability: {
    AvailabilityMode: number;
    AvailableTimes: string[] | null;
    MenuSectionId: number;
  };
  MenuSectionId: number;
  MenuSectionMetadata: TMenuItemMetadata[];
  Name: string;
  PublicId: string;
};
