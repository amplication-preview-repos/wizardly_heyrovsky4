import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="tags" multiline source="tags" />
        <TextInput label="title" source="title" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
