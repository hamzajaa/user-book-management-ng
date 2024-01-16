import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../services/client.service";
import {MessageService} from "primeng/api";
import {StringUtils} from "../../../utils/StringUtils";
import {ClientDto} from "../../../models/ClientDto.model";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit{

  private _validClientFirstName: boolean = true;
  private _validClientLastName: boolean = true;
  private _validClientPhoneNumber: boolean = true;
  private _validClientEmail: boolean = true;

  constructor(private clientService: ClientService,
              private messageService:MessageService) {
  }

  ngOnInit(): void {
  }


  public edit() {
    this.validateForm();
    if (this.errorMessages.length === 0) {
      this.clientService.edit(this.client).subscribe({
          next: (client) => {
            const myIndex = this.clients.findIndex(a => a.id === this.client.id);
            this.clients[myIndex] = client;
            this.editDialog = false;
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Client Updated Successfully'});
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
    if (StringUtils.isEmpty(this.client.firstName)) {
      this.errorMessages.push('First Name not valid');
      this.validClientFirstName = false;
    } else {
      this.validClientFirstName = true;
    }
  }

  public validateLastName() {
    if (StringUtils.isEmpty(this.client.lastName)) {
      this.errorMessages.push('Last Name not valid');
      this.validClientLastName = false;
    }
    this.validClientLastName = true;
  }

  public validateEmail() {
    if (StringUtils.isEmpty(this.client.email)) {
      this.errorMessages.push('Email not valid');
      this.validClientEmail = false;
    } else {
      this.validClientEmail = true;
    }
  }

  public validatePhoneNumber() {
    if (StringUtils.isEmpty(this.client.phoneNumber)) {
      this.errorMessages.push('Phone Number not valid');
      this.validClientPhoneNumber = false;
    } else {
      this.validClientPhoneNumber = true;
    }
  }


  hideCreateDialog() {
    this.editDialog = false;
  }

  get editDialog() {
    return this.clientService.editDialog
  }

  set editDialog(value: boolean) {
    this.clientService.editDialog = value
  }


  get validClientFirstName(): boolean {
    return this._validClientFirstName;
  }

  set validClientFirstName(value: boolean) {
    this._validClientFirstName = value;
  }

  get validClientLastName(): boolean {
    return this._validClientLastName;
  }

  set validClientLastName(value: boolean) {
    this._validClientLastName = value;
  }

  get validClientPhoneNumber(): boolean {
    return this._validClientPhoneNumber;
  }

  set validClientPhoneNumber(value: boolean) {
    this._validClientPhoneNumber = value;
  }

  get validClientEmail(): boolean {
    return this._validClientEmail;
  }

  set validClientEmail(value: boolean) {
    this._validClientEmail = value;
  }

  get client(): ClientDto {
    return this.clientService.client;
  }

  set client(value: ClientDto) {
    this.clientService.client = value;
  }

  get clients(): Array<ClientDto> {
    return this.clientService.clients;
  }

  set clients(value: Array<ClientDto>) {
    this.clientService.clients = value;
  }

  get errorMessages(): Array<string> {
    return this.clientService.errorMessages;
  }

  set errorMessages(value: Array<string>) {
    this.clientService.errorMessages = value;
  }

  get selectedClient(): ClientDto {
    return this.clientService.selectedClient;
  }

  set selectedClient(value: ClientDto) {
    this.clientService.selectedClient = value;
  }



}
