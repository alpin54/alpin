import DefaultSchema from "@configs/schema";
export interface DynamicSchemaOptions { page?: string; }
export default function schemaDynamic(data: DynamicSchemaOptions = {}) {
  return {
    webpage: {
      url: new URL(data.page?.toLowerCase() || "", DefaultSchema.webpage.url).toString(),
      name: data.page ? `${data.page} | ${DefaultSchema.webpage.name}` : DefaultSchema.webpage.name,
    },
  };
}
