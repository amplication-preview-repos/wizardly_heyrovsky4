import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ImageGenerationHistoryList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ImageGenerationHistories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="generatedImageUrl" source="generatedImageUrl" />
        <TextField label="ID" source="id" />
        <TextField label="parametersUsed" source="parametersUsed" />
        <TextField label="promptDescription" source="promptDescription" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
