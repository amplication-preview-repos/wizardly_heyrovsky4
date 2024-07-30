import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ImageGenerationHistoryEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="generatedImageUrl" source="generatedImageUrl" />
        <TextInput label="parametersUsed" multiline source="parametersUsed" />
        <TextInput
          label="promptDescription"
          multiline
          source="promptDescription"
        />
      </SimpleForm>
    </Edit>
  );
};
