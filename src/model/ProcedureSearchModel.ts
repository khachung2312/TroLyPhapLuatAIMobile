
class ProcedureSearchModel {
  maThuTuc: string
  tenThuTuc: string
  link: string
  capThucHien: string
  linhVuc: string
  doiTuongThucHien: string
  coQuanCoThamQuyen: string

  constructor(

    maThuTuc: string,
    tenThuTuc: string,
    link: string,
    capThucHien: string,
    linhVuc: string,
    doiTuongThucHien: string,
    coQuanCoThamQuyen: string
  ) {
    this.maThuTuc = maThuTuc
    this.tenThuTuc = tenThuTuc
    this.link = link
    this.capThucHien = capThucHien
    this.linhVuc = linhVuc
    this.doiTuongThucHien = doiTuongThucHien
    this.coQuanCoThamQuyen = coQuanCoThamQuyen
  }
}

export default ProcedureSearchModel