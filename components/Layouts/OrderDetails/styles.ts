const styles = {
  root: {
    display: 'flex',
    width: '1920px',
    height: '976px',
    alignItems: 'flex-start',
    flexShrink: 0,
    margin: 0,
    // position: 'relative',
    padding: 0,
    left: 0,
    top: 0,
  },
  formtabContainer: {
    position: 'fixed',
    left: '0px',
    top: '102px',
    width: '1920px',
    height: '976px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  formtab: {
    display: 'flex',
    width: '1260px',
    height: '976px',
    padding: '36px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '36px',
    flexShrink: 0,
    position: 'relative',
    // top: '26px',
  },
  formtitlebooking: {
    // position: 'relative',
    display: 'flex',
    width: '1188px',
    height: '60px',
    alignItems: 'flex-start',
    flexShrink: 0,
    margin: 0,
  },
  formtitle: {
    // position: 'relative',
    display: 'flex',
    // width: '594px',
    height: '60px',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
  },
  formtitletext: {
    // position: 'relative',
    dispaly: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  formbooking: {
    // position: 'relative',
    display: 'flex',
    width: '594px',
    height: '60px',
    alignItems: 'center',
    gap: '36px',
    flexShrink: 0,
  },
  bookingtitle: {
    // position: 'relative',
    display: 'flex',
    width: '398px',
    height: '60px',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
  },
  bookingtext: {
    // position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#F00',
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  bookingbtn: {
    // position: 'relative',
    display: 'flex',
    width: '160px',
    height: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
    borderRadius: '5px',
    border: '2px solid #000',
    backgroundColor: '#FFF',
  },
  bookingbtntext: {
    // position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  orderform: {
    // position: 'relative',
    display: 'flex',
    width: '1188px',
    height: '696px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
    flexShrink: 0,
    border: '2px solid #000',
    background: '#FFF',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  orderbody: {
    // position: 'relative',
    display: 'flex',
    // width: '1188px',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  orderitem: {
    display: 'flex',
    border: '1px solid #F6F6F6',
    // flexDirection: 'column',
  },
  ordercheck: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  orderddata0: {
    display: 'flex',
    height: '58px',
    padding: '10px 8px',
    alignItems: 'center',
    gap: '10px',
    // alignSelf: 'strectch',
    background: '#FFF',
    boxShadow: '0px -1px 0px 0px rgba(0, 0, 0, 0.12)insert',
  },
  ordercheckbox: {
    display: 'flex',
    width: '32px',
    height: '32px',
    padding: '0px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '32px',
  },
  orderid: {
    display: 'flex',
    width: '80px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 0,
  },
  orderddata: {
    display: 'flex',
    height: '58px',
    padding: '10px 16px',
    alignItems: 'center',
    gap: '10px',
    alignSelf: 'strectch',
    background: '#FFF',
    boxShadow: '0px -1px 0px 0px rgba(0, 0, 0, 0.12)insert',
  },
  ordertext: {
    flex: 100,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '20px',
    letterSpacing: '0.4px',
    whiteSpace: 'nowrap',
    // textAlign: 'right',
  },
  ordermenu: {
    display: 'flex',
    width: '528px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 0,
  },
  orderquan: {
    display: 'flex',
    width: '230px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 0,
  },
  orderprice: {
    display: 'flex',
    width: '230px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 0,
  },
  orderprice2: {
    display: 'flex',
    width: '72px',
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 0,
  },
  manibtntle: {
    // position: 'relative',
    display: 'flex',
    // width: '1188px',
    height: '90px',
    alignItems: 'flex-start',
    gap: '36px',
    flexShrink: 0,
  },
  manibtn: {
    display: 'flex',
    width: '168px',
    height: '90px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
    borderRadius: '5px',
    border: '2px solid #000',
    backgroundColor: '#FFF',
  },
  manibtntext: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  paymenttab: {
    display: 'flex',
    width: '660px',
    height: '976px',
    padding: '36px',
    position: 'absolute',
    top: 0,
    right: -720,
    flexDirection: 'column',
    alignItems: 'center',
    gap: '332px',
    flexShrink: 0,
    backgroundColor: '#FFF',
  },
  amountform: {
    display: 'flex',
    width: '588px',
    height: '360px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    flexShrink: 0,
  },
  payamount: {
    display: 'flex',
    width: '588px',
    height: '100px',
    padding: '15px',
    alignItems: 'flex-start',
    flexShrink: 0,
    alignSelf: 'streatch',
    borderBottom: '2px solid #000',
  },
  payamounttext1: {
    display: 'flex',
    width: '279px',
    height: '70px',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  },
  payamounttext2: {
    display: 'flex',
    width: '279px',
    height: '70px',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    color: '#F00',
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  },
  amountg: {
    display: 'flex',
    height: '240px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 0,
    alignSelf: 'stretch',
    borderRadius: '5px',
    background: '#F6F6F6',
  },
  totalamount: {
    display: 'flex',
    height: '60px',
    padding: '15px',
    alignItems: 'flex-start',
    flexShrink: 0,
    alignSelf: 'stretch',
  },
  amounttext1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  amounttext2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#F00',
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  payb: {
    display: 'flex',
    width: '588px',
    height: '216px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '36px',
    flexShrink: 0,
  },
  payoptb: {
    display: 'flex',
    width: '588px',
    height: '90px',
    alignItems: 'flex-start',
    gap: '36px',
    flexShrink: 0,
  },
  splitpayb: {
    display: 'flex',
    width: '588px',
    height: '90px',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '10px',
    flex: 100,
    borderRadius: '5px',
    border: '2px solid #000',
    backgroundColor: '#FFF',
  },
  payoptbtext: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  splitpayb2: {
    display: 'flex',
    width: '588px',
    height: '90px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
    borderRadius: '5px',
    background: 'linear-gradient(90deg, #00D1FF 0%, #0066FF 100%)',
  },
  payoptbtext2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#FF0',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  },
  paymodal: {
    display: 'flex',
    width: '660px',
    height: '564px',
    // padding: '36px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '60px',
    borderRadius: '5px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  paycon: {
    display: 'flex',
    width: '660px',
    height: '564px',
    padding: '36px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '60px',
    backgroundColor: '#FFF',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    // borderRadius: '5px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  titlebtn: {
    display: 'flex',
    width: '588px',
    height: '60px',
    padding: '0',
    alignItems: 'flex-start',
    gap: '36px',
    alignSelf: 'stretch',
    // margin: '0',
  },
  paytitle: {
    display: 'flex',
    width: '492px',
    height: '60px',
    alignItems: 'center',
    gap: '10px',
    margin: 0,
  },
  paytitletext: {
    display: 'flex',
    height: '60px',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  paybtn: {
    display: 'flex',
    width: '60px',
    height: '60px',
    padding: '18px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '5px',
    border: '2px solid var(--Solid-000000, #000)',
    background: '#FFF',
  },

  paybtngr: {
    display: 'flex',
    width: '588px',
    height: '372px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '36px',
    alignSelf: 'stretch',
    margin: '0',
  },
  paybtnn: {
    display: 'flex',
    width: '588px',
    height: '100px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
    alignSelf: 'stretch',
    borderRadius: '5px',
    border: '2px solid #000000',
    background: '#FFF',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  paybtnn2: {
    display: 'flex',
    width: '588px',
    height: '100px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
    alignSelf: 'stretch',
    borderRadius: '5px',
    border: '2px solid rgba(0, 0, 0, 0.42)',
    background: '#F6F6F6',
    color: 'rgba(0, 0, 0, 0.42)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  cardmodal: {
    display: 'flex',
    width: '660px',
    height: '852px',
    // borderRadius: '5px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  cardmodalcon: {
    display: 'flex',
    width: '660px',
    height: '852px',
    padding: '36px',
    gap: '40px',
    // borderRadius: '5px',
    background: '#FFF',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    display: 'flex',
    width: '492px',
    // height: '60px',
    alignItems: 'center',
    gap: '10px',
  },
  cardlabel: {
    display: 'flex',
    width: '588px',
    height: '30px',
    alignItems: 'flex-start',
    gap: '10px',
    flexShrink: 0,
  },
  cardlabeltext: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  select: {
    display: 'inline-flex',
    width: '574px',
    height: '60px',
    paddingLeft: '0px',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  selecttext: {
    display: 'flex',
    width: '272px',
    height: '30px',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  selectslot: {
    display: 'flex',
    width: '287px',
    height: '60px',
    padding: '8px 12px',
    alignItems: 'center',
    gap: '10px',
    alignSelf: 'stretch',
    borderRadius: '4px',
    border: '1px solid rgba(0, 0, 0, 0.42)',
  },
  selectin: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flex: 100,
  },
  intext: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
  micon: {
    display: 'flex',
    width: '24px',
    height: '24px',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrik: 0,
  },
  micontext: {
    color: 'rgba(0, 0, 0, 0.54)',
    textAlign: 'center',
    fontFamily: 'Material Icons',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '100%',
  },
  share: {
    display: 'flex',
    width: '588px',
    height: '100',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    borderRadius: '5px',
    backgroundColor: '#F6F6F6',
  },
  sharetext: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  sharetext2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#F00',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    marginTop: '10px',
  },
  share2: {
    display: 'flex',
    width: '588px',
    height: '230px',
    padding: '20px 0px 180px 0px',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: '5px',
    border: '1px solid #000',
  },
  share2text: {
    width: '588px',
    height: '30px',
    flexShrink: 0,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  daumbtn: {
    display: 'flex',
    width: '588px',
    height: '90px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '20px',
    flexShrink: 0,
    borderRadius: '5px',
    background: 'linear-gradient(90deg, #00D1FF 0%, #0066FF 100%)',
  },
  daumbtntext: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#FF0',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  },
  paymentmodal: {
    display: 'flex',
    width: '660px',
    height: '580px',
    gap: '50px',
    // borderRadius: '5px',
    background: '#FFF',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  paymentlabel: {
    display: 'flex',
    width: '588px',
    height: '60px',
    alignItems: 'flex-start',
    gap: '10px',
    flexShrink: 0,
  },
  paymentlabeltext: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  paymentimg: {
    width: '90px',
    height: '90px',
    flexShrink: 0,
  },
  paymentimgtext: {
    display: 'flex',
    width: '90px',
    height: '90px',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#1976D2',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
  paymentlabel2: {
    display: 'flex',
    width: '588px',
    height: '30px',
    alignItems: 'flex-start',
    gap: '10px',
    flexShrink: 0,
  },
  paymentlabel2text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  cm: {
    display: 'flex',
    width: '660px',
    height: '606px',
    // borderRadius: '5px',
    background: '#FFF',
    // boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    position: 'fixed',
    flexDirection: 'column',
    alignItems: 'flex-start',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  cashmodal: {
    display: 'flex',
    width: '660px',
    height: '606px',
    padding: '36px',
    gap: '40px',
    // borderRadius: '5px',
    background: '#FFF',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    position: 'fixed',
    flexDirection: 'column',
    alignItems: 'flex-start',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  cashtitle: {
    display: 'flex',
    width: '588px',
    height: '60px',
    alignItems: 'flex-start',
    gap: '36px',
    flexShrink: 0,
    alignSelf: 'stretch',
  },
  cashtitletext: {
    display: 'flex',
    width: '492px',
    height: '60px',
    gap: '10px',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  cashlabel: {
    display: 'flex',
    width: '588px',
    height: '30px',
    alignItems: 'flex-start',
    gap: '10px',
    flexShrink: 0,
  },
  cashlabeltext: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  dff: {
    display: 'flex',
    width: '574px',
    height: '60px',
    padding: '15px',
    alignItems: 'flex-start',
    flexShrink: 0,
  },
  dfftext1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  dfftext2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    // margin: 0,
    alignSelf: 'stretch',
    color: '#F00',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    textAlign: 'right',
  },
  ifdf: {
    // display: 'flex',
    paddingLeft: '0px',
    marginTop: '-30px',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dff2: {
    display: 'flex',
    width: '574px',
    height: '60px',
    padding: '15px',
    marginTop: '20px',
    alignItems: 'flex-start',
    flexShrink: 0,
    borderRadius: '5px',
    background: '#F6F6F6',
  },
  cashbtn: {
    display: 'flex',
    width: '588px',
    height: '90px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '30px',
    flexShrink: 0,
    borderRadius: '5px',
    background: 'linear-gradient(90deg, #00D1FF 0%, #0066FF 100%)',
  },
  cashbtntext: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#FF0',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  },
  cashcomplete: {
    display: 'flex',
    width: '660px',
    height: '852px',
    position: 'fixed',
    // flexDirection: 'column',
    // alignItems: 'flex-start',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  cashcomplete2: {
    // margin: 0,
    display: 'flex',
    width: '660px',
    height: '852px',
    padding: '36px',
    gap: '40px',
    // borderRadius: '5px',
    background: '#FFF',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    position: 'fixed',
    flexDirection: 'column',
    alignItems: 'flex-start',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  comtitle: {
    display: 'flex',
    width: '588px',
    height: '60px',
    // alignItems: 'center',
    gap: '10px',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    textAlign: 'left',
  },
  comlabel: {
    display: 'flex',
    width: '588px',
    height: '30px',
    alignItems: 'flex-start',
    gap: '10px',
    flexShrink: 0,
    flex: 100,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#000',
    fontFamliy: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    textAlign: 'left',
  },
  comform: {
    display: 'flex',
    width: '574px',
    height: '60px',
    padding: '15px',
    alignItems: 'flex-start',
    flexShrink: 0,
  },
  comframe: {
    display: 'flex',
    width: '574px',
    height: '120px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexShrink: 0,
    borderRadius: '5px',
    background: '#F6F6F6',
  },
  combtn1: {
    display: 'flex',
    width: '588px',
    height: '90px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
    borderRadius: '5px',
    border: '2px solid #000',
    background: '#FFF',
  },
  combtn1text: {
    display: 'flex',
    flex: 100,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#000',
    fontFamliy: 'Roboto',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  btns: {
    display: 'flex',
    width: '588px',
    gap: '36px',
    margin: 0,
  },
  combtn2: {
    display: 'flex',
    width: '276px',
    height: '90px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
    borderRadius: '5px',
    border: '2px solid #000',
    background: '#FFF',
  },
  combtn3: {
    display: 'flex',
    width: '276px',
    height: '90px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
    borderRadius: '5px',
    background: 'linear-gradient(90deg, #00D1FF 0%, #0066FF 100%)',
  },
  receiptmodal: {
    display: 'flex',
    width: '660px',
    height: '450px',
    position: 'fixed',
    // flexDirection: 'column',
    // alignItems: 'flex-start',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  receiptmodal2: {
    display: 'flex',
    width: '660px',
    height: '450px',
    padding: '36px',
    gap: '40px',
    // borderRadius: '5px',
    background: '#FFF',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    position: 'fixed',
    flexDirection: 'column',
    alignItems: 'flex-start',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  receipttitle: {
    display: 'flex',
    width: '588px',
    height: '60px',
    alignItems: 'flex-start',
    gap: '36px',
    flexShrink: 0,
    alignSelf: 'stretch',
  },
  rt1: {
    // display: 'flex',
    width: '492px',
    height: '60px',
    alignItems: 'center',
    gap: '10px',
    flex: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#000',
    fontFamliy: 'Roboto',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    textAlign: 'left',
  },
  inputform: {
    display: 'flex',
    width: '588px',
    height: '108px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '18px',
    flexShrink: 0,
    alignSelf: 'stretch',
    margin: 0,
  },
  ipt: {
    display: 'flex',
    width: '588px',
    height: '30px',
    alignItems: 'flex-start',
    gap: '10px',
    flexShrink: 0,
    margin: 0,
  },
  ipttext: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    textAlign: 'left',
    margin: 0,
  },
  outline: {
    display: 'flex',
    width: '588px',
    height: '60px',
    // padding: '8px 12px',
    alignItems: 'center',
    gap: '10px',
    flex: 100,
    flexShrink: 0,
    alignSelf: 'stretch',
    // borderRadius: '4px',
    // border: '1px solid var(--solid-00000042, rgba(0, 0, 0, 0.42))',
  },
  tablein: {
    display: 'flex',
    width: '564px',
    height: '44px',
    alignItems: 'center',
    gap: '10px',
    flex: 100,
    alignSelf: 'stretch',
  },
  bunhalmodal: {
    display: 'flex',
    width: '660px',
    height: '568px',
    // padding: '36px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    // gap: '60px',
    borderRadius: '5px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  bunhalmodal2: {
    display: 'flex',
    width: '660px',
    height: '568px',
    padding: '36px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '60px',
    // borderRadius: '5px',
    background: '#FFF',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  bunbtn: {
    display: 'flex',
    width: '588px',
    height: '70px',
    // marginTop: '-20px',
    alignItems: 'center',
    flexShrink: 0,
  },
  bunbtn1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flex: 100,
    alignSelf: 'stretch',
    borderBottom: '5px solid',
    borderImage: 'linear-gradient(90deg, #00D1FF, #0066FF) 1',
    background: '#FFF',
  },
  bunbtn1text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'strectch',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    background: 'linear-gradient(90deg, #00D1FF 0%, #0066FF 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  bunbtn2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flex: 100,
    alignSelf: 'stretch',
    borderBottom: '5px solid #DDD',
    background: '#FFF',
  },
  bunbtn2text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'strectch',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    color: '#000',
  },
  ddd: {
    display: 'flex',
    // padding: '8px 12px',
    alignItems: 'center',
    gap: '10px',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
  },
  bunhalbtn3: {
    display: 'flex',
    width: '588px',
    height: '90px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '60px',
    flexShrink: 0,
    borderRadius: '5px',
    background: 'linear-gradient(90deg, #00D1FF 0%, #0066FF 100%)',
  },
  bunhalbtn3text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 100,
    alignSelf: 'stretch',
    color: '#FF0',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  },
};
export default styles;