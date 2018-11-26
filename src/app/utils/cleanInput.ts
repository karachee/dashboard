export class CleanInput {

  public static cleanString(input: string): string {
    return (input != null) ? input.replace(/['"]+/g, '').trim() : input;
  }
}

