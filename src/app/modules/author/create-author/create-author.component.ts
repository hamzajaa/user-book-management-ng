import {Component, OnInit} from '@angular/core';
import {AuthorService} from "../../../services/author.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {StringUtils} from "../../../utils/StringUtils";
import {AuthorDto} from "../../../models/AuthorDto.model";

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {

  private _validAuthorFirstName: boolean = true;
  private _validAuthorLastName: boolean = true;
  private _validAuthorPhoneNumber: boolean = true;
  private _validAuthorEmail: boolean = true;

  constructor(private authorService: AuthorService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
  }

  public save() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.validateForm()
        console.log(this.errorMessages.length)
        if (this.errorMessages.length === 0) {
          this.authorService.save(this.selectedAuthor).subscribe({
            next: (author) => {
              this.authors.push({...author})
              this.createDialog = false;
              this.selectedAuthor = new AuthorDto();
              this.messageService.add({severity: 'success', summary: 'Success', detail: 'Author Saved Successfully'});
            }
            , error: err => {
              console.log(err);
            }
          })
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Errors',
            detail: 'Please correct the errors on the form'
          })
        }
      },
      reject: () => {
        this.messageService.add({severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled'});
      }
    })

  }


  private validateForm() {
    this.errorMessages = new Array<string>();
    this.validateFirstName();
    this.validateLastName();
    this.validateEmail();
    this.validatePhoneNumber();
    this.confirmationService.close();
  }

  public validateFirstName() {
    console.log(this.selectedAuthor.firstName + " err")
    if (StringUtils.isEmpty(this.selectedAuthor.firstName)) {
      this.errorMessages.push('First Name not valid');
      this.validAuthorFirstName = false;
    } else {
      this.validAuthorFirstName = true;
    }
  }

  public validateLastName() {
    if (StringUtils.isEmpty(this.selectedAuthor.lastName)) {
      this.errorMessages.push('Last Name not valid');
      this.validAuthorLastName = false;
    } else {
      this.validAuthorLastName = true;
    }
  }

  public validateEmail() {
    if (StringUtils.isEmpty(this.selectedAuthor.email)) {
      this.errorMessages.push('Email not valid');
      this.validAuthorEmail = false;
    } else {
      this.validAuthorEmail = true;
    }
  }

  public validatePhoneNumber() {
    if (StringUtils.isEmpty(this.selectedAuthor.phoneNumber)) {
      this.errorMessages.push('Phone Number not valid');
      this.validAuthorPhoneNumber = false;
    } else {
      this.validAuthorPhoneNumber = true;
    }
  }

  hideCreateDialog() {
    this.createDialog = false;
  }

  get createDialog() {
    return this.authorService.createDialog
  }

  set createDialog(value: boolean) {
    this.authorService.createDialog = value
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
