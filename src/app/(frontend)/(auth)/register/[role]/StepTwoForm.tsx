"use client";
import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function StepTwoForm() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const pronounValue = watch("pronoun");
  const majorValue = watch("major");

  const fieldClass =
    "w-full pl-3 pr-3 py-3 h-12 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500";

  const dropdownClasses =
    "bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10 mt-1 max-h-60 overflow-auto";

  return (
    <>
      {/* Pronoun */}
      <label className="mb-2 block font-medium">Pronoun</label>
      <Select
        value={pronounValue}
        onValueChange={(val) =>
          setValue("pronoun", val, { shouldValidate: true })
        }
      >
        <SelectTrigger className={fieldClass}>
          <SelectValue placeholder="Select…" />
        </SelectTrigger>
        <SelectContent className={dropdownClasses}>
          <SelectItem value="he">he</SelectItem>
          <SelectItem value="she">she</SelectItem>
          <SelectItem value="they">they</SelectItem>
        </SelectContent>
      </Select>
      {errors.pronoun && (
        <p className="text-sm text-red-500">
          {errors.pronoun.message as string}
        </p>
      )}

      {/* Major */}
      <label className="mb-2 mt-4 block font-medium">Major</label>
      <Select
        value={majorValue}
        onValueChange={(val) =>
          setValue("major", val, { shouldValidate: true })
        }
      >
        <SelectTrigger className={fieldClass}>
          <SelectValue placeholder="Select…" />
        </SelectTrigger>
        <SelectContent className={dropdownClasses}>
          <SelectItem value="software engineering">
            software engineering
          </SelectItem>
          <SelectItem value="uxui design">uxui design</SelectItem>
          <SelectItem value="computer science">computer science</SelectItem>
        </SelectContent>
      </Select>
      {errors.major && (
        <p className="text-sm text-red-500">{errors.major.message as string}</p>
      )}

      {/* Profile Photo */}
      <label className="mb-2 mt-4 block font-medium">Profile Photo</label>
      <Input
        type="file"
        accept="image/*"
        {...register("photo")}
        className={fieldClass}
      />

      {/* Goals */}
      <label className="mb-2 mt-4 block font-medium">Goals</label>
      <Input
        {...register("goals")}
        placeholder="Goals"
        className={fieldClass}
      />
      {errors.goals && (
        <p className="text-sm text-red-500">{errors.goals.message as string}</p>
      )}

      {/* Bio */}
      <label className="mb-2 mt-4 block font-medium">Bio</label>
      <textarea
        {...register("bio")}
        rows={3}
        placeholder="Bio"
        className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.bio && (
        <p className="text-sm text-red-500">{errors.bio.message as string}</p>
      )}

      {/* LinkedIn */}
      <label className="mb-2 mt-4 block font-medium">LinkedIn Profile</label>
      <Input
        {...register("linkedin")}
        placeholder="LinkedIn URL"
        className={fieldClass}
      />
      {errors.linkedin && (
        <p className="text-sm text-red-500">
          {errors.linkedin.message as string}
        </p>
      )}
    </>
  );
}
