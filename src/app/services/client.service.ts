import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {ClientDto} from "../models/ClientDto.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  private API = environment.apiUrl + 'clients/';
  private _createDialog!: boolean;
  private _editDialog!: boolean;
  private _viewDialog!: boolean;
  private _selectedClients: Array<ClientDto> = new Array<ClientDto>();
  private _selectedClient: ClientDto = new ClientDto();
  private _searchClient: ClientDto = new ClientDto();
  private _clients: Array<ClientDto> | undefined;
  private _client: ClientDto = new ClientDto;
  private _errorMessages: Array<string> = new Array<string>()

  constructor(private http: HttpClient) {
  }

  public findAll() {
    return this.http.get<Array<ClientDto>>(this.API);
  }

  public save(clientDto: ClientDto): Observable<ClientDto> {
    return this.http.post<ClientDto>(this.API, clientDto);
  }

  public findById(id: number) {
    return this.http.get<ClientDto>(this.API + "id/" + id);
  }

  public delete(id: number) {
    return this.http.delete<number>(this.API + "id/" + id);
  }

  public edit(client: ClientDto) {
    return this.http.put<ClientDto>(this.API , client);
  }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }


  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  get selectedClient(): ClientDto {
    return this._selectedClient;
  }

  set selectedClient(value: ClientDto) {
    this._selectedClient = value;
  }


  get client(): ClientDto {
    return this._client;
  }

  set client(value: ClientDto) {
    this._client = value;
  }


  get clients(): Array<ClientDto> {
    if (this._clients == null) {
      this._clients = new Array<ClientDto>();
    }
    return this._clients;
  }

  set clients(value: Array<ClientDto>) {
    this._clients = value;
  }


  get errorMessages(): Array<string> {
    return this._errorMessages;
  }

  set errorMessages(value: Array<string>) {
    this._errorMessages = value;
  }


  get searchClient(): ClientDto {
    return this._searchClient;
  }

  set searchClient(value: ClientDto) {
    this._searchClient = value;
  }

  get selectedClients(): Array<ClientDto> {
    return this._selectedClients;
  }

  set selectedClients(value: Array<ClientDto>) {
    this._selectedClients = value;
  }
}
