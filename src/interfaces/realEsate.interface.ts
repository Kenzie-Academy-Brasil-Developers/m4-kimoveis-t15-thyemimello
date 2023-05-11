import { TypeOf, z } from "zod";
import {
  createAddressSchema,
  realEstateSchema,
  returnAdrressSchema,
  returnMultRealSchema,
  returnRealSchema,
} from "../schemas/RealEstate.schrmas";
import { DeepPartial } from "typeorm";

type RealEstateRequest = z.infer<typeof realEstateSchema>;
type RealEstateReturn = z.infer<typeof returnRealSchema>;

type AddressRequest = z.infer<typeof createAddressSchema>;
type AddressReturn = z.infer<typeof returnAdrressSchema>;

type RealReturnAll = z.infer<typeof returnMultRealSchema>;

type RealEstateUpdate = DeepPartial<AddressRequest>;

export {
  RealEstateRequest,
  RealEstateReturn,
  AddressRequest,
  AddressReturn,
  RealReturnAll,
  RealEstateUpdate
};
