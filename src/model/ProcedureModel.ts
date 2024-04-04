class ProcedureModel {
    thongTinChung: {
        maThuTuc: string;
        tenThuTuc: string;
        link: string;
        soQuyetDinh: string;
        capThucHien: string;
        loaiThuTuc: string;
        linhVuc: string;
        doiTuongThucHien: string;
        bpmnFileName: string;
        coQuanThucHien: string;
        coQuanCoThamQuyen: string;
        ketQuaThucHien: string;
    };
    canCuPhapLy: Array<{
        soKyHieu: string;
        trichYeu: string;
        ngayBanHanh: string;
        coQuanBanHanh: string;
    }>;
    yeuCauVaDieuKienThucHien: string;
    thuTucThucHien: Array<{
        _id: string;
        nodeID: string;
        nodeContent: string;
        thuTucID: number;
        maThuTuc: string;
    }>;
    cachThucThucHien: Array<{
        thoiGianGiaiQuyet: string;
        phi: string;
        moTa: string;
        hinhThucNop: string;
    }>;
    thanhPhanHoSo: Array<{
        tenGiayTo: string;
        mauGiayTo: {
            name: string;
            link: string;
            newDocName: string;
            newDocxName: string;
            newPDFName: string;
            thumbnail: string;
        };
        soLuong: string;
    }>;

    constructor(
        thongTinChung: {
            maThuTuc: string;
            tenThuTuc: string;
            link: string;
            soQuyetDinh: string;
            capThucHien: string;
            loaiThuTuc: string;
            linhVuc: string;
            doiTuongThucHien: string;
            bpmnFileName: string;
            coQuanThucHien: string;
            coQuanCoThamQuyen: string;
            ketQuaThucHien: string;
        },
        canCuPhapLy: Array<{
            soKyHieu: string;
            trichYeu: string;
            ngayBanHanh: string;
            coQuanBanHanh: string;
        }>,
        yeuCauVaDieuKienThucHien: string,
        thuTucThucHien: Array<{
            _id: string;
            nodeID: string;
            nodeContent: string;
            thuTucID: number;
            maThuTuc: string;
        }>,
        cachThucThucHien: Array<{
            thoiGianGiaiQuyet: string;
            phi: string;
            moTa: string;
            hinhThucNop: string;
        }>,
        thanhPhanHoSo: Array<{
            tenGiayTo: string;
            mauGiayTo: {
                name: string;
                link: string;
                newDocName: string;
                newDocxName: string;
                newPDFName: string;
                thumbnail: string;
            };
            soLuong: string;
        }>
    ) {
        this.thongTinChung = thongTinChung;
        this.canCuPhapLy = canCuPhapLy;
        this.yeuCauVaDieuKienThucHien = yeuCauVaDieuKienThucHien;
        this.thuTucThucHien = thuTucThucHien;
        this.cachThucThucHien = cachThucThucHien;
        this.thanhPhanHoSo = thanhPhanHoSo;
    }
}

export default ProcedureModel