import {Component, OnInit} from '@angular/core';
import {AuthorDto} from "../../../models/AuthorDto.model";
import {AuthorService} from "../../../services/author.service";
import {StringUtils} from "../../../utils/StringUtils";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  private _validAuthorFirstName: boolean = true;
  private _validAuthorLastName: boolean = true;
  private _validAuthorPhoneNumber: boolean = true;
  private _validAuthorEmail: boolean = true;

  constructor(private authorService: AuthorService,
              private messageService:MessageService) {
  }

  ngOnInit(): void {
  }


  public edit() {
    this.validateForm();
    if (this.errorMessages.length === 0) {
      this.authorService.edit(this.author).subscribe({
          next: (author) => {
            const myIndex = this.authors.findIndex(a => a.id === this.author.id);
            this.authors[myIndex] = author;
            this.editDialog = false;
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Author Updated Successfully'});
          },
          error: (err) => {
            console.log(err);
          }
        }
      );
    }
  }


  private validateForm() {
    this.errorMessages = new Array<string>();
    this.validateFirstName();
    this.validateLastName();
    this.validateEmail();
    this.validatePhoneNumber();
  }

  public validateFirstName() {
    if (StringUtils.isEmpty(this.author.firstName)) {
      this.errorMessages.push('First Name not valid');
      this.validAuthorFirstName = false;
    } else {
      this.validAuthorFirstName = true;
    }
  }

  public validateLastName() {
    if (StringUtils.isEmpty(this.author.lastName)) {
      this.errorMessages.push('Last Name not valid');
      this.validAuthorLastName = false;
    }
    this.validAuthorLastName = true;
  }

  public validateEmail() {
    if (StringUtils.isEmpty(this.author.email)) {
      this.errorMessages.push('Email not valid');
      this.validAuthorEmail = false;
    } else {
      this.validAuthorEmail = true;
    }
  }

  public validatePhoneNumber() {
    if (StringUtils.isEmpty(this.author.phoneNumber)) {
      this.errorMessages.push('Phone Number not valid');
      this.validAuthorPhoneNumber = false;
    } else {
      this.validAuthorPhoneNumber = true;
    }
  }


  hideCreateDialog() {
    this.editDialog = false;
  }

  get editDialog() {
    return this.authorService.editDialog
  }

  set editDialog(value: boolean) {
    this.authorService.editDialog = value
  }


  get validAuthorFirstName(): boolean {
    return this._validAuthorFirstName;
  }

  set validAuthorFirstName(value: boolean) {
    this._validAuthorFirstName = value;
  }

  get validAuthorLastName(): boolean {
    return this._validAuthorLastName;
  }

  set validAuthorLastName(value: boolean) {
    this._validAuthorLastName = value;
  }

  get validAuthorPhoneNumber(): boolean {
    return this._validAuthorPhoneNumber;
  }

  set validAuthorPhoneNumber(value: boolean) {
    this._validAuthorPhoneNumber = value;
  }

  get validAuthorEmail(): boolean {
    return this._validAuthorEmail;
  }

  set validAuthorEmail(value: boolean) {
    this._validAuthorEmail = value;
  }

  get author(): AuthorDto {
    return this.authorService.author;
  }

  set author(value: AuthorDto) {
    this.authorService.author = value;
  }

  get authors(): Array<AuthorDto> {
    return this.authorService.authors;
  }

  set authors(value: Array<AuthorDto>) {
    this.authorService.authors = value;
  }

  get errorMessages(): Array<string> {
    return this.authorService.errorMessages;
  }

  set errorMessages(value: Array<string>) {
    this.authorService.errorMessages = value;
  }

  get selectedAuthor(): AuthorDto {
    return this.authorService.selectedAuthor;
  }

  set selectedAuthor(value: AuthorDto) {
    this.authorService.selectedAuthor = value;
  }


}
