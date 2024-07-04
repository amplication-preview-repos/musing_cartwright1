import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { UserTitle } from "../user/UserTitle";

export const SteamKeyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="activated" source="activated" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <TextInput label="gameName" source="gameName" />
        <TextInput label="key" source="key" />
        <ReferenceInput source="order.id" reference="Order" label="order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput label="price" source="price" />
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
