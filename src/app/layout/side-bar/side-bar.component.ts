import { Component, OnInit, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { AvatarModule } from "primeng/avatar";
import { Button } from "primeng/button";
import { ImportsModule } from '../../module/imports';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  standalone:true,
  imports: [AvatarModule, Button, ImportsModule]
})
export class SideBarComponent implements OnInit {
  
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  sidebarVisible: boolean = false;
  ngOnInit(): void {
    
  }
    
    closeCallback(e:any): void {
      this.sidebarRef.close(e);
  }

}
