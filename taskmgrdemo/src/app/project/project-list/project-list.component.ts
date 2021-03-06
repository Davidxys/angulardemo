import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NewProjectComponent } from '../new-project/new-project.component'
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from '../../anims/router.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnim') state;
  projects = [
    {
      "name": "企业协作平台",
      "desc": "企业协作平台desc",
      "coverImg": "assets/img/covers/0.jpg",
    },
    {
      "name": "企业协作平台",
      "desc": "企业协作平台desc",
      "coverImg": "assets/img/covers/1.jpg",
    }
  ];
  constructor(public dialog: MatDialog, private cd:ChangeDetectorRef) { }

  ngOnInit() {
  }
  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data:{title: '新增项目：'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = [ ...this.projects,
        {name:'一个新项目', desc: "一个新项目", coverImg:'assets/img/covers/8.png'},
        {name:'又一个新项目', desc: "又一个新项目", coverImg:'assets/img/covers/8.png'},
      ];
      this.cd.markForCheck();
    });
  }
  launchInviteDialog() {
    this.dialog.open(InviteComponent, {
      data:"这是一句话"
    });
  }
  launchEditDialog(){
    this.dialog.open(NewProjectComponent, {
      data: {title: '编辑项目：'}
    });
  }
  launchConfirmDialog(project){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data:{title: '删除项目：', content: '您确认删除该项目吗？'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = this.projects.filter(p => p.name===project.id);
      this.cd.markForCheck();
    });
  }
}
