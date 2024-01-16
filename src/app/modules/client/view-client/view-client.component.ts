import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../services/client.service";
import {ClientDto} from "../../../models/ClientDto.model";

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {

  constructor(private clientService: ClientService) {
  }


  ngOnInit(): void {
  }

  hideEditDialog() {
    this.viewDialog = false;
  }

  get client(): ClientDto {
    return this.clientService.client;
  }

  set client(value: ClientDto) {
    this.clientService.client = value;
  }

  get viewDialog(): boolean {
    return this.clientService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.clientService.viewDialog = value;
  }

}
