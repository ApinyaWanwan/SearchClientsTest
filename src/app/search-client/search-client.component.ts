import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Clients } from '../model/clients.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss']
})
export class SearchClientComponent implements OnInit {
  clientList: Clients[];
  filterClients: Clients[];

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe(data => {
      this.clientList = data;
    }, (err) => {
      console.log('Get clients error: ', err);
    });
  }

  onSearch(searchTerm: any) {
    if (searchTerm === '') {
      this.filterClients = [];
      return;
    }

    const filterItems = this.clientList.filter(el => el.thaiFullname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    if (filterItems) {
      this.filterClients = filterItems;
    }
  }

  redirectInverDetail(clientId: number) {
    this.router.navigate(['/invester-detail', clientId]);
  }
}
