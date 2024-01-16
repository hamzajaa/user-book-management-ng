import {Component, OnInit} from '@angular/core';
import {AuthorService} from "../../../services/author.service";
import {AuthorDto} from "../../../models/AuthorDto.model";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent implements OnInit {
  findByCriteriaShow: boolean = false;

  constructor(private authorService: AuthorService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.loadAuthors();
  }

  openNew() {
    this.selectedAuthor = new AuthorDto();
    this.createDialog = true;
  }

  editAuthor(author: AuthorDto) {
    this.authorService.findById(author.id).subscribe(author => {
      this.author = author;
      this.editDialog = true;
    })
  }

  deleteAuthor(author: AuthorDto) {
    this.confirmationService.confirm({
      message: 'Are you sure to delete this author ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept:()=>{
      this.authorService.delete(author.id).subscribe(number => {
        if (number > 0) {
          const position = this.authors.indexOf(author);
          position > -1 ? this.authors.splice(position, 1) : false;
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: 'Auhtor deleted successfully',
            life: 3000
          })
        }
      })
      }
    })

  }

  viewAuthor(author: AuthorDto) {
    this.authorService.findById(author.id).subscribe(author => {
      this.author = author;
      this.viewDialog = true;
    })
  }

  loadAuthors() {
    this.authorService.findAll().subscribe(data => this.authors = data);
  }


  get createDialog(): boolean {
    return this.authorService.createDialog;
  }

  set createDialog(value: boolean) {
    this.authorService.createDialog = value;
  }

  get editDialog(): boolean {
    return this.authorService.editDialog;
  }

  set editDialog(value: boolean) {
    this.authorService.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.authorService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.authorService.viewDialog = value;
  }

  get selectedAuthor(): AuthorDto {
    return this.authorService.selectedAuthor;
  }

  set selectedAuthor(value: AuthorDto) {
    this.authorService.selectedAuthor = value;
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


  get errorMessage(): Array<string> {
    return this.authorService.errorMessages;
  }

  set errorMessage(value: Array<string>) {
    this.authorService.errorMessages = value;
  }


  get searchAuthor(): AuthorDto {
    return this.authorService.searchAuthor;
  }

  set searchAuthor(value: AuthorDto) {
    this.authorService.searchAuthor = value;
  }

  deleteSelectedAuthors() {

  }

  get selectedAuthors(): Array<AuthorDto> {
    return this.authorService.selectedAuthors;
  }

  set selectedAuthors(value: Array<AuthorDto>) {
    this.authorService.selectedAuthors = value;
  }


}
