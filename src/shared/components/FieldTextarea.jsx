import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export function FieldTextarea() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel className="text-[#ABB8C4]" htmlFor="feedback">
              Reason for appointment
            </FieldLabel>
            <Textarea
              className="text-[#76828D] border-[#363A3D] 
               ring-none focus:ring-none focus:border-[#363A3D] focus:outline-none focus:ring-0"
              id="feedback"
              placeholder="ex: Annual montly check-up"
              rows={4}
            />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
