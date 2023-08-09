import { Component, OnInit } from '@angular/core';
import { PointsService } from './points.service';
import { Points } from '../../models/points';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-points-guide',
  templateUrl: './points-guide.component.html',
  styleUrls: ['./points-guide.component.css']
})
export class PointsGuideComponent implements OnInit {

  points: Points[] = [];
  datasource: MatTableDataSource<Points> = new MatTableDataSource<Points>([]);

  constructor(
    private service: PointsService
  ) { }

  ngOnInit(): void {
    this.getPoints();
  }

  getPoints() {
    this.service.getPoints().subscribe((points: Points[]) => this.datasource.data = points);
  }

}
