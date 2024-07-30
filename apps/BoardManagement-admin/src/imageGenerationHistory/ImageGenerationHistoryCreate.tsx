import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ImageGenerationHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="generatedImageUrl" source="generatedImageUrl" />
        <TextInput label="parametersUsed" multiline source="parametersUsed" />
        <TextInput
          label="promptDescription"
          multiline
          source="promptDescription"
        />
      </SimpleForm>
    </Create>
  );
};
