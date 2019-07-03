import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../../../../../../services-FANPAGE/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'm-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.scss']
})
export class UpdateReviewComponent implements OnInit {
  public idShare: string;
  public nameCamp: string;
  public currentReview: number;
  public content: string;
  public linkChiendich: URL;
  public lastValue: number = 0;

  constructor(private _acRouter: ActivatedRoute, private _data: DataService, private _router: Router, private toastr: ToastrService) {
    this.idShare = this._acRouter.snapshot.params['id'];

    // get detail
    if (this.idShare) {
      this._data.detailReview(this.idShare).subscribe(data => {
        // console.log(data);
        this.nameCamp = data.nameCamp;
        this.currentReview = data.currentReview;
        this.content = data.content;
        this.linkChiendich = data.linkChiendich;
        this.lastValue=this.currentReview;
      }, error => {
        this.toastr.error('Có lỗi xảy ra trong quá trình cập nhật', 'Cập nhật dữ liệu bị lỗi');
      });
    }
  }

  ngOnInit() {
  }
  updateReview() {
    if (this.currentReview > this.lastValue) {
      const data = {
        'nameCamp': this.nameCamp,
        'currentReview': this.currentReview,
        'content': this.content,
        'linkChiendich': this.linkChiendich
      };
      // tslint:disable-next-line:no-shadowed-variable
      this._data.updateReview(this.idShare, data).subscribe(
        data => {
        this._router.navigateByUrl('/campaign/review/index-review');
        this.toastr.success('Dữ liệu đã được thay đổi trên hệ thống', 'Cập nhật thành công!!!');
      }, error => {
        this.toastr.error('Có lỗi xảy ra trong quá trình cập nhật', 'Cập nhật dữ liệu bị lỗi');
      });
    } else {
      this.toastr.error('Số review mục tiêu cần lớn hơn số review hiện có', 'Dữ liệu nhập vào không hợp lệ');
    }
  }
}