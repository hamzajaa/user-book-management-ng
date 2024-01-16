import {AuthorDto} from "./AuthorDto.model";
import {CategoryDto} from "./CategoryDto.model";
import {BaseDto} from "./BaseDto.model";

export class BookDto extends BaseDto{
  public title!: string;
  public description!: string;
  public numberOfPages!: number | null;
  public onLoan!: boolean;
  public authorDto!: AuthorDto;
  public categoryDto!: CategoryDto;
}
