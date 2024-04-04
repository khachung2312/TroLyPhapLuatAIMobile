
class DocumentSearchModel {
  soKyHieu: string
  tenVanBan: string
  ngayBanHanh: string
  coQuanBanHanh: string
  trangThai: string
  ketQuaTimThay: {
    maViTri: string,
    dieu: string,
    maTrichDan: string,
    noiDung: string
  }

  constructor(
    soKyHieu: string,
    tenVanBan: string,
    ngayBanHanh: string,
    coQuanBanHanh: string,
    trangThai: string,
    ketQuaTimThay: {
      maViTri: string,
      dieu: string,
      maTrichDan: string,
      noiDung: string
    }
  ) {
    this.soKyHieu = soKyHieu
    this.tenVanBan = tenVanBan
    this.ngayBanHanh = ngayBanHanh
    this.coQuanBanHanh = coQuanBanHanh
    this.trangThai = trangThai
    this.ketQuaTimThay = ketQuaTimThay
  }
}

export default DocumentSearchModel