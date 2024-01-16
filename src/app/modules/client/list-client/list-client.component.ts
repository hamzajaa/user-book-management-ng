import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../services/client.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {ClientDto} from "../../../models/ClientDto.model";

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  findByCriteriaShow: boolean = false;

  constructor(private clientService: ClientService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.loadClients();
  }

  openNew() {
    this.createDialog = true;
  }

  editClient(client: ClientDto) {
    this.clientService.findById(client.id).subscribe(client => {
      this.client = client;
      this.editDialog = true;
    })
  }

  deleteClient(client: ClientDto) {
    this.confirmationService.confirm({
      message: 'Are you sure to delete this client ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept:()=>{
        this.clientService.delete(client.id).subscribe(number => {
          if (number > 0) {
            const position = this.clients.indexOf(client);
            position > -1 ? this.clients.splice(position, 1) : false;
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

  viewClient(client: ClientDto) {
    this.clientService.findById(client.id).subscribe(client => {
      this.client = client;
      this.viewDialog = true;
    })
  }

  loadClients() {
    this.clientService.findAll().subscribe(data => this.clients = data);
  }


  get createDialog(): boolean {
    return this.clientService.createDialog;
  }

  set createDialog(value: boolean) {
    this.clientService.createDialog = value;
  }

  get editDialog(): boolean {
    return this.clientService.editDialog;
  }

  set editDialog(value: boolean) {
    this.clientService.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.clientService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.clientService.viewDialog = value;
  }

  get selectedClient(): ClientDto {
    return this.clientService.selectedClient;
  }

  set selectedClient(value: ClientDto) {
    this.clientService.selectedClient = value;
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


  get errorMessage(): Array<string> {
    return this.clientService.errorMessages;
  }

  set errorMessage(value: Array<string>) {
    this.clientService.errorMessages = value;
  }


  get searchClient(): ClientDto {
    return this.clientService.searchClient;
  }

  set searchClient(value: ClientDto) {
    this.clientService.searchClient = value;
  }

  deleteSelectedClients() {

  }

  get selectedClients(): Array<ClientDto> {
    return this.clientService.selectedClients;
  }

  set selectedClients(value: Array<ClientDto>) {
    this.clientService.selectedClients = value;
  }


}
