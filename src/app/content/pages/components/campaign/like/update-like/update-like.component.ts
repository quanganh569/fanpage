import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../../../../services-FANPAGE/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'm-update-like',
  templateUrl: './update-like.component.html',
  styleUrls: ['./update-like.component.scss']
})
export class UpdateLikeComponent implements OnInit {
  idLike: string;
  public nameCamp: string;
  public currentLike: number;
  public linkChiendich: URL;
  public lastValue: number = 0;

  constructor(private _acRouter: ActivatedRoute, private _data: DataService, private _router: Router, private toastr: ToastrService) {
    this.idLike = this._acRouter.snapshot.params['id'];

    if (this.idLike) {
      this._data.detailLike(this.idLike).subscribe(
        data => {
          // console.log(data);
          this.nameCamp = data.nameCamp;
          this.linkChiendich = data.linkChiendich;
          this.currentLike = data.currentLike;
          this.lastValue = this.currentLike;
          
        }, error => {
          this.toastr.error('Có lỗi xảy ra trong quá trình tải dữ liệu', 'Tải dữ liệu bị lỗi');
        });
    }

  }

  ngOnInit() {
  }

  updateLike() {
    if (this.currentLike > this.lastValue) {
      const data = {
        'nameCamp': this.nameCamp,
        'currentLike': this.currentLike,
        'linkChiendich': this.linkChiendich
      };
      
      this._data.updateLike(this.idLike, data).subscribe(
        data => {
          this._router.navigateByUrl('/campaign/like/index-like');
          this.toastr.success('Dữ liệu đã được thay đổi trên hệ thống', 'Cập nhật dữ liệu thành công');
        }, error => {
          this.toastr.error('Có lỗi xảy ra trong quá trình cập nhật', 'Cập nhật dữ liệu bị lỗi');
        });
    } else {
      this.toastr.error('Số like mục tiêu cần lớn hơn số like hiện có', 'Dữ liệu nhập vào không hợp lệ');
    }
  }
}
