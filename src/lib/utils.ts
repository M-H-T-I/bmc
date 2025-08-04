export function slugify(inputText: string): string{
    
    return inputText.toLowerCase().replace(/\s+/g, "-");

}