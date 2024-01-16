import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {StringUtils} from "../../../utils/StringUtils";
import {ClientService} from "../../../services/client.service";
import {ClientDto} from "../../../models/ClientDto.model";

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  private _validClientFirstName: boolean = true;
  private _validClientLastName: boolean = true;
  private _validClientPhoneNumber: boolean = true;
  private _validClientEmail: boolean = true;

  constructor(private clientService: ClientService,
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
        if (this.errorMessages.length === 0) {
          console.log(this.selectedClient + " err")
          this.clientService.save(this.selectedClient).subscribe({
            next: (client) => {
              this.clients.push({...client})
              this.createDialog = false;
              this.selectedClient = new ClientDto();
              this.messageService.add({severity: 'success', summary: 'Success', detail: 'Client Saved Successfully'});
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
    if (StringUtils.isEmpty(this.selectedClient.firstName)) {
      this.errorMessages.push('First Name not valid');
      this.validClientFirstName = false;
    } else {
      this.validClientFirstName = true;
    }
  }

  public validateLastName() {
    if (StringUtils.isEmpty(this.selectedClient.lastName)) {
      this.errorMessages.push('Last Name not valid');
      this.validClientLastName = false;
    } else {
      this.validClientLastName = true;
    }
  }

  public validateEmail() {
    if (StringUtils.isEmpty(this.selectedClient.email)) {
      this.errorMessages.push('Email not valid');
      this.validClientEmail = false;
    } else {
      this.validClientEmail = true;
    }
  }

  public validatePhoneNumber() {
    if (StringUtils.isEmpty(this.selectedClient.phoneNumber)) {
      this.errorMessages.push('Phone Number not valid');
      this.validClientPhoneNumber = false;
    } else {
      this.validClientPhoneNumber = true;
    }
  }

  hideCreateDialog() {
    this.createDialog = false;
  }

  get createDialog() {
    return this.clientService.createDialog
  }

  set createDialog(value: boolean) {
    this.clientService.createDialog = value
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
