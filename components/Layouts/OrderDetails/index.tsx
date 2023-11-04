import { Button, Checkbox, Container, Modal, TextField } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import styles from './styles';

interface OrderDetailsProps {
  tableNumber: number;
}

export default function OrderDetails({ tableNumber }: OrderDetailsProps) {
  const [payModalOpen, setPayModalOpen] = useState(false);
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const [paymentModalOpen, setPayMentModalOpen] = useState(false);
  const [cashModalOpen, setCashModalOpen] = useState(false);
  const [cashcompleteModalOpen, setCashCompleteModalOpen] = useState(false);
  const [receiptModalOpen, setReceiptModalOpen] = useState(false);
  const [changequanModalOpen, setChangeQuanModalOpen] = useState(false);
  const [bunhalModalOpen, setBunhalModalOpen] = useState(false);

  const openCardModal = () => {
    setPayModalOpen(false);
    setCardModalOpen(true);
  };

  const closeCardModal = () => {
    setPayModalOpen(true);
    setCardModalOpen(false);
  };

  const openPayMentModal = () => {
    setCardModalOpen(false);
    setPayMentModalOpen(true);
  };

  const closePayMentModal = () => {
    setCardModalOpen(true);
    setPayMentModalOpen(false);
  };
  const openCashModal = () => {
    setPayModalOpen(false);
    setCashModalOpen(true);
  };

  const closeCashModal = () => {
    setPayModalOpen(true);
    setCashModalOpen(false);
  };
  const openCashCompleteModal = () => {
    setCashModalOpen(false);
    setCashCompleteModalOpen(true);
  };

  const closeCashCompleteModal = () => {
    setCashModalOpen(true);
    setCashCompleteModalOpen(false);
  };
  const openReceiptModal = () => {
    setCashCompleteModalOpen(false);
    setReceiptModalOpen(true);
  };

  const closeReceiptModal = () => {
    setCashCompleteModalOpen(true);
    setReceiptModalOpen(false);
  };

  const [orderItems] = useState([
    { id: 'ID', menu: '메뉴명', quantity: '수량', price: '단가', status: '상태' },
    { id: 2, menu: 'AAA', quantity: 2, price: 3000, status: '완료' },
    { id: 3, menu: 'BBB', quantity: 1, price: 5000, status: '접수' },
    { id: 4, menu: '', quantity: '', price: '', status: '' },
    { id: 5, menu: '', quantity: '', price: '', status: '' },
    { id: 6, menu: '', quantity: '', price: '', status: '' },
    { id: 7, menu: '', quantity: '', price: '', status: '' },
    { id: 8, menu: '', quantity: '', price: '', status: '' },
    { id: 9, menu: '', quantity: '', price: '', status: '' },
    { id: 10, menu: '', quantity: '', price: '', status: '' },
    { id: 11, menu: '', quantity: '', price: '', status: '' },
  ]);
  return (
    <>
      <Container
        sx={styles.root}
        disableGutters>
        <Container
          sx={styles.formtabContainer}
          disableGutters>
          <Container
            sx={styles.formtab}
            disableGutters>
            <Container
              sx={styles.formtitlebooking}
              disableGutters>
              <Container
                sx={styles.formtitle}
                disableGutters>
                <Container
                  sx={styles.formtitletext}
                  disableGutters>
                  주문서 - Table #{tableNumber}
                </Container>
              </Container>
              {/* <Container
                sx={styles.formbooking}
                disableGutters>
                <Container59852
                  sx={styles.bookingtitle}
                  disableGutters>
                  <Container
                    sx={styles.bookingtext}
                    disableGutters>
                    예약 OOO 12:00PM
                  </Container>
                </Container59852>
                <Button sx={styles.bookingbtn}>
                  <Container
                    sx={styles.bookingbtntext}
                    disableGutters>
                    예약 취소
                  </Container>
                </Button>
              </Container> */}
            </Container>
            <Container
              sx={styles.orderform}
              disableGutters>
              <Container
                sx={styles.orderbody}
                disableGutters>
                {orderItems.map((item) => (
                  <Container
                    key={item.id}
                    sx={styles.orderitem}
                    disableGutters>
                    <Container
                      sx={styles.ordercheck}
                      disableGutters>
                      <Container
                        sx={styles.orderddata0}
                        disableGutters>
                        <Checkbox sx={styles.ordercheckbox} />
                      </Container>
                    </Container>
                    <Container
                      sx={styles.orderid}
                      disableGutters>
                      <Container
                        sx={styles.orderddata}
                        disableGutters>
                        <Container
                          sx={styles.ordertext}
                          disableGutters>
                          {item.id}
                        </Container>
                      </Container>
                    </Container>
                    <Container
                      sx={styles.ordermenu}
                      disableGutters>
                      <Container
                        sx={styles.orderddata}
                        disableGutters>
                        <Container
                          sx={styles.ordertext}
                          disableGutters>
                          {item.menu}
                        </Container>
                      </Container>
                    </Container>
                    <Container
                      sx={styles.orderquan}
                      disableGutters>
                      <Container
                        sx={styles.orderddata}
                        disableGutters>
                        <Container
                          sx={styles.ordertext}
                          disableGutters>
                          {item.quantity}
                        </Container>
                      </Container>
                    </Container>
                    <Container
                      sx={styles.orderprice}
                      disableGutters>
                      <Container
                        sx={styles.orderddata}
                        disableGutters>
                        <Container
                          sx={styles.ordertext}
                          disableGutters>
                          {item.price}
                        </Container>
                      </Container>
                    </Container>
                    <Container
                      sx={styles.orderprice2}
                      disableGutters>
                      <Container
                        sx={styles.orderddata}
                        disableGutters>
                        <Container
                          sx={styles.ordertext}
                          disableGutters>
                          {item.status}
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                ))}
              </Container>
            </Container>
            <Container
              sx={styles.manibtntle}
              disableGutters>
              <Button sx={styles.manibtn}>
                <Container
                  sx={styles.manibtntext}
                  disableGutters>
                  전체 취소
                </Container>
              </Button>
              <Button sx={styles.manibtn}>
                <Container
                  sx={styles.manibtntext}
                  disableGutters>
                  선택 취소
                </Container>
              </Button>
              <Button sx={styles.manibtn}>
                <Container
                  sx={styles.manibtntext}
                  disableGutters>
                  할인 적용
                </Container>
              </Button>
              <Button
                sx={styles.manibtn}
                onClick={() => setChangeQuanModalOpen(!changequanModalOpen)}>
                <Container
                  sx={styles.manibtntext}
                  disableGutters>
                  수량 변경
                </Container>
              </Button>
              <Button sx={styles.manibtn}>
                <Container
                  sx={styles.manibtntext}
                  disableGutters>
                  접수로 변경
                </Container>
              </Button>
              <Button sx={styles.manibtn}>
                <Container
                  sx={styles.manibtntext}
                  disableGutters>
                  완료로 변경
                </Container>
              </Button>
            </Container>
          </Container>
          <Container
            sx={styles.paymenttab}
            disableGutters>
            <Container
              sx={styles.amountform}
              disableGutters>
              <Container
                sx={styles.payamount}
                disableGutters>
                <Container
                  sx={styles.payamounttext1}
                  disableGutters>
                  결제 금액
                </Container>
                <Container
                  sx={styles.payamounttext2}
                  disableGutters>
                  10,000 원
                </Container>
              </Container>
              <Container
                sx={styles.amountg}
                disableGutters>
                <Container
                  sx={styles.totalamount}
                  disableGutters>
                  <Container
                    sx={styles.amounttext1}
                    disableGutters>
                    합계 금액
                  </Container>
                  <Container
                    sx={styles.amounttext2}
                    disableGutters>
                    10,000 원
                  </Container>
                </Container>
                <Container
                  sx={styles.totalamount}
                  disableGutters>
                  <Container
                    sx={styles.amounttext1}
                    disableGutters>
                    할인 금액
                  </Container>
                  <Container
                    sx={styles.amounttext2}
                    disableGutters>
                    0 원
                  </Container>
                </Container>
                <Container
                  sx={styles.totalamount}
                  disableGutters>
                  <Container
                    sx={styles.amounttext1}
                    disableGutters>
                    공급가액
                  </Container>
                  <Container
                    sx={styles.amounttext2}
                    disableGutters>
                    9,091 원
                  </Container>
                </Container>
                <Container
                  sx={styles.totalamount}
                  disableGutters>
                  <Container
                    sx={styles.amounttext1}
                    disableGutters>
                    부가가치세
                  </Container>
                  <Container
                    sx={styles.amounttext2}
                    disableGutters>
                    909 원
                  </Container>
                </Container>
              </Container>
            </Container>
            <Container
              sx={styles.payb}
              disableGutters>
              <Container
                sx={styles.payoptb}
                disableGutters>
                <Button
                  sx={styles.splitpayb}
                  onClick={() => setBunhalModalOpen(!bunhalModalOpen)}>
                  <Container sx={styles.payoptbtext}>분할 결제</Container>
                </Button>
              </Container>
              <Container
                sx={styles.payoptb}
                disableGutters>
                <Button
                  sx={styles.splitpayb2}
                  onClick={() => setPayModalOpen(!payModalOpen)}>
                  <Container sx={styles.payoptbtext2}>결제 - 10,000원</Container>
                </Button>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
      <Modal
        sx={styles.paymodal}
        open={payModalOpen}>
        <Container
          sx={styles.paycon}
          disableGutters>
          <Container
            sx={styles.titlebtn}
            disableGutters>
            <Container
              sx={styles.paytitle}
              disableGutters>
              <Container
                sx={styles.paytitletext}
                disableGutters>
                결제
              </Container>
            </Container>
            <Button
              sx={styles.paybtn}
              onClick={() => setPayModalOpen(!payModalOpen)}>
              <Image
                src='./images/backb.svg'
                width={24}
                height={24}
                priority
                alt='backb'
              />
            </Button>
          </Container>
          <Container
            sx={styles.paybtngr}
            disableGutters>
            <Button
              sx={styles.paybtnn}
              onClick={openCardModal}>
              카드/RF 결제
            </Button>
            <Button
              sx={styles.paybtnn}
              onClick={openCashModal}>
              현금 결제
            </Button>
            <Button sx={styles.paybtnn2}>간편 결제</Button>
          </Container>
        </Container>
      </Modal>
      <Modal
        sx={styles.cardmodal}
        open={cardModalOpen}>
        <Container
          sx={styles.cardmodalcon}
          disableGutters>
          <Container
            sx={styles.titlebtn}
            disableGutters>
            <Container
              sx={styles.title}
              disableGutters>
              <Container
                sx={styles.paytitletext}
                disableGutters>
                카드/RF 결제
              </Container>
            </Container>
            <Button
              sx={styles.paybtn}
              onClick={closeCardModal}>
              <Image
                src='./images/backb.svg'
                width={24}
                height={24}
                priority
                alt='backb'
              />
            </Button>
          </Container>
          <Container
            sx={styles.cardlabel}
            disableGutters>
            <Container
              sx={styles.cardlabeltext}
              disableGutters>
              5만원 이상 거래 시 카드 서명
            </Container>
          </Container>
          <Container
            sx={styles.select}
            disableGutters>
            <Container
              sx={styles.selecttext}
              disableGutters>
              할부 선택
            </Container>
            <Container
              sx={styles.selectslot}
              disableGutters>
              <Container
                sx={styles.intext}
                disableGutters>
                일시불
              </Container>
              <Container
                sx={styles.micon}
                disableGutters>
                <Container
                  sx={styles.micontext}
                  disableGutters>
                  ▼
                </Container>
              </Container>
            </Container>
          </Container>
          <Container
            sx={styles.share}
            disableGutters>
            <Container
              sx={styles.sharetext}
              disableGutters>
              결제 금액
            </Container>
            <Container
              sx={styles.sharetext2}
              disableGutters>
              50,000원
            </Container>
          </Container>
          <Container
            sx={styles.share2}
            disableGutters>
            <Container
              sx={styles.share2text}
              disableGutters>
              서명
            </Container>
          </Container>
          <Button
            sx={styles.daumbtn}
            onClick={openPayMentModal}>
            <Container
              sx={styles.daumbtntext}
              disableGutters>
              다 음
            </Container>
          </Button>
        </Container>
      </Modal>
      <Modal
        sx={styles.paymentmodal}
        open={paymentModalOpen}>
        <Container
          sx={styles.paymentmodal}
          disableGutters>
          <Container
            sx={styles.titlebtn}
            disableGutters>
            <Container
              sx={styles.title}
              disableGutters>
              <Container
                sx={styles.paytitletext}
                disableGutters>
                카드/RF 결제
              </Container>
            </Container>
            <Button
              sx={styles.paybtn}
              onClick={closePayMentModal}>
              <Image
                src='./images/backb.svg'
                width={24}
                height={24}
                priority
                alt='backb'
              />
            </Button>
          </Container>
          <Container
            sx={styles.paymentlabel}
            disableGutters>
            <Container
              sx={styles.paymentlabeltext}
              disableGutters>
              카드를 IC 카드 리더기에 삽입하거나 RF 리더기에 접촉해주세요.
            </Container>
          </Container>
          <Container
            sx={styles.share}
            disableGutters>
            <Container
              sx={styles.sharetext}
              disableGutters>
              결제 금액
            </Container>
            <Container
              sx={styles.sharetext2}
              disableGutters>
              50,000원
            </Container>
          </Container>
          <Container
            sx={{ ...styles.paymentimg, position: 'relative' }}
            disableGutters>
            <Image
              src='./images/Ellipse 2.svg'
              width={90}
              height={90}
              priority
              alt='Ellipse 2'
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
            <Image
              src='./images/Ellipse 1.svg'
              width={90}
              height={90}
              priority
              alt='Ellipse 1'
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <Container
              sx={styles.paymentimgtext}
              disableGutters>
              29s
            </Container>
          </Container>
          <Container
            sx={styles.paymentlabel2}
            disableGutters>
            <Container
              sx={styles.paymentlabel2text}
              disableGutters>
              Kible POS는 Apple Pay, 삼성 페이, LG 페이를 지원합니다.
            </Container>
          </Container>
        </Container>
      </Modal>
      <Modal
        sx={styles.cm}
        open={cashModalOpen}>
        <Container
          sx={styles.cashmodal}
          disableGutters>
          <Container
            sx={styles.cashtitle}
            disableGutters>
            <Container
              sx={styles.cashtitletext}
              disableGutters>
              현금 결제
            </Container>
            <Button
              sx={styles.paybtn}
              onClick={closeCashModal}>
              <Image
                src='./images/backb.svg'
                width={24}
                height={24}
                priority
                alt='backb'
              />
            </Button>
          </Container>
          <Container
            sx={styles.cashlabel}
            disableGutters>
            <Container
              sx={styles.cashlabeltext}
              disableGutters>
              현금으로 받은 금액을 입력하세요.
            </Container>
          </Container>
          <Container
            sx={styles.ifdf}
            disableGutters>
            <Container
              sx={styles.dff}
              disableGutters>
              <Container
                sx={styles.dfftext1}
                disableGutters>
                결제 금액
              </Container>
              <Container
                sx={styles.dfftext2}
                disableGutters>
                5,000원
              </Container>
            </Container>
            <Container
              sx={styles.dff}
              disableGutters>
              <Container
                sx={styles.dfftext1}
                disableGutters>
                결제 금액
              </Container>
              <TextField
                sx={styles.dfftext2}
                inputProps={{
                  min: 1,
                  max: 100,
                  // type: 'number',
                  style: {
                    color: '#F00',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.5px',
                    textAlign: 'right',
                  },
                }}
                placeholder='10,000원'
                fullWidth
              />
            </Container>
          </Container>
          <Container
            sx={styles.dff2}
            disableGutters>
            <Container
              sx={styles.dfftext1}
              disableGutters>
              거스름 돈
            </Container>
            <Container
              sx={styles.dfftext2}
              disableGutters>
              5,000원
            </Container>
          </Container>
          <Button
            sx={styles.cashbtn}
            onClick={openCashCompleteModal}>
            <Container
              sx={styles.cashbtntext}
              disableGutters>
              다 음
            </Container>
          </Button>
        </Container>
      </Modal>
      <Modal
        sx={styles.cashcomplete}
        open={cashcompleteModalOpen}>
        <Container
          sx={styles.cashcomplete2}
          disableGutters>
          <Container
            sx={styles.comtitle}
            disableGutters>
            결제 완료
          </Container>
          <Container
            sx={styles.comlabel}
            disableGutters>
            현금 결제가 완료되었습니다.
          </Container>
          <Container disableGutters>
            <Container
              sx={styles.comform}
              disableGutters>
              <Container
                sx={styles.dfftext1}
                disableGutters>
                공급가액
              </Container>
              <Container
                sx={styles.dfftext2}
                disableGutters>
                4,545원
              </Container>
            </Container>
            <Container
              sx={styles.comform}
              disableGutters>
              <Container
                sx={styles.dfftext1}
                disableGutters>
                부가가치세
              </Container>
              <Container
                sx={styles.dfftext2}
                disableGutters>
                455원
              </Container>
            </Container>
            <Container
              sx={styles.comform}
              disableGutters>
              <Container
                sx={styles.dfftext1}
                disableGutters>
                결제 금액
              </Container>
              <Container
                sx={styles.dfftext2}
                disableGutters>
                5,000원
              </Container>
            </Container>
          </Container>
          <Container
            sx={styles.comframe}
            disableGutters>
            <Container
              sx={styles.comform}
              disableGutters>
              <Container
                sx={styles.dfftext1}
                disableGutters>
                받은 금액
              </Container>
              <Container
                sx={styles.dfftext2}
                disableGutters>
                10,000원
              </Container>
            </Container>
            <Container
              sx={styles.comform}
              disableGutters>
              <Container
                sx={styles.dfftext1}
                disableGutters>
                거스름 돈
              </Container>
              <Container
                sx={styles.dfftext2}
                disableGutters>
                5,000원
              </Container>
            </Container>
          </Container>
          <Button
            sx={styles.combtn1}
            onClick={openReceiptModal}>
            <Container
              sx={styles.combtn1text}
              disableGutters>
              현금 연수증 발급
            </Container>
          </Button>
          <Container
            sx={styles.btns}
            disableGutters>
            <Button sx={styles.combtn2}>
              <Container
                sx={styles.combtn1text}
                disableGutters>
                영수증 인쇄
              </Container>
            </Button>
            <Button
              sx={styles.combtn3}
              onClick={closeCashCompleteModal}>
              <Container
                sx={styles.cashbtntext}
                disableGutters>
                닫기
              </Container>
            </Button>
          </Container>
        </Container>
      </Modal>
      <Modal
        sx={styles.receiptmodal}
        open={receiptModalOpen}>
        <Container
          sx={styles.receiptmodal2}
          disableGutters>
          <Container
            sx={styles.receipttitle}
            disableGutters>
            <Container
              sx={styles.rt1}
              disableGutters>
              현금 영수증 발급
            </Container>
            <Button
              sx={styles.paybtn}
              onClick={closeReceiptModal}>
              <Image
                src='./images/backb.svg'
                width={24}
                height={24}
                priority
                alt='backb'
              />
            </Button>
          </Container>
          <Container
            sx={styles.inputform}
            disableGutters>
            <Container
              sx={styles.ipt}
              disableGutters>
              <Container
                sx={styles.ipttext}
                disableGutters>
                휴대폰 번호를 입력하세요.
              </Container>
            </Container>
            <TextField
              sx={styles.outline}
              inputProps={{
                min: 1,
                max: 100,
                // type: 'number',
                style: {
                  color: '#000',
                  fontFamily: 'Roboto',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '24px',
                  letterSpacing: '0.5px',
                },
              }}
              placeholder='휴대폰 번호 입력'
              fullWidth
            />
          </Container>
          <Button
            sx={styles.cashbtn}
            onClick={() => setReceiptModalOpen(!receiptModalOpen)}>
            <Container
              sx={styles.cashbtntext}
              disableGutters>
              발 급
            </Container>
          </Button>
        </Container>
      </Modal>
      <Modal
        sx={styles.cashcomplete}
        open={cashcompleteModalOpen}>
        <Container
          sx={styles.cashcomplete2}
          disableGutters>
          <Container
            sx={styles.comtitle}
            disableGutters>
            결제 완료
          </Container>
          <Container
            sx={styles.comlabel}
            disableGutters>
            현금 결제가 완료되었습니다.
          </Container>
          <Container disableGutters>
            <Container
              sx={styles.comform}
              disableGutters>
              <Container
                sx={styles.dfftext1}
                disableGutters>
                공급가액
              </Container>
              <Container
                sx={styles.dfftext2}
                disableGutters>
                4,545원
              </Container>
            </Container>
            <Container
              sx={styles.comform}
              disableGutters>
              <Container
                sx={styles.dfftext1}
                disableGutters>
                부가가치세
              </Container>
              <Container
                sx={styles.dfftext2}
                disableGutters>
                455원
              </Container>
            </Container>
            <Container
              sx={styles.comform}
              disableGutters>
              <Container
                sx={styles.dfftext1}
                disableGutters>
                결제 금액
              </Container>
              <Container
                sx={styles.dfftext2}
                disableGutters>
                5,000원
              </Container>
            </Container>
          </Container>
          <Container
            sx={styles.comframe}
            disableGutters>
            <Container
              sx={styles.comform}
              disableGutters>
              <Container
                sx={styles.dfftext1}
                disableGutters>
                받은 금액
              </Container>
              <Container
                sx={styles.dfftext2}
                disableGutters>
                10,000원
              </Container>
            </Container>
            <Container
              sx={styles.comform}
              disableGutters>
              <Container
                sx={styles.dfftext1}
                disableGutters>
                거스름 돈
              </Container>
              <Container
                sx={styles.dfftext2}
                disableGutters>
                5,000원
              </Container>
            </Container>
          </Container>
          <Button
            sx={styles.combtn1}
            onClick={openReceiptModal}>
            <Container
              sx={styles.combtn1text}
              disableGutters>
              현금 연수증 발급
            </Container>
          </Button>
          <Container
            sx={styles.btns}
            disableGutters>
            <Button sx={styles.combtn2}>
              <Container
                sx={styles.combtn1text}
                disableGutters>
                영수증 인쇄
              </Container>
            </Button>
            <Button
              sx={styles.combtn3}
              onClick={closeCashCompleteModal}>
              <Container
                sx={styles.cashbtntext}
                disableGutters>
                닫기
              </Container>
            </Button>
          </Container>
        </Container>
      </Modal>
      <Modal
        sx={styles.receiptmodal}
        open={changequanModalOpen}>
        <Container
          sx={styles.receiptmodal2}
          disableGutters>
          <Container
            sx={styles.receipttitle}
            disableGutters>
            <Container
              sx={styles.rt1}
              disableGutters>
              수량 변경
            </Container>
            <Button
              sx={styles.paybtn}
              onClick={() => setChangeQuanModalOpen(!changequanModalOpen)}>
              <Image
                src='./images/backb.svg'
                width={24}
                height={24}
                priority
                alt='backb'
              />
            </Button>
          </Container>
          <Container
            sx={styles.inputform}
            disableGutters>
            <Container
              sx={styles.ipt}
              disableGutters>
              <Container
                sx={styles.ipttext}
                disableGutters>
                변경할 수량을 입력하세요.
              </Container>
            </Container>
            <TextField
              sx={styles.outline}
              inputProps={{
                min: 1,
                max: 100,
                // type: 'number',
                style: {
                  color: '#000',
                  fontFamily: 'Roboto',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '24px',
                  letterSpacing: '0.5px',
                },
              }}
              placeholder='수량 입력'
              fullWidth
            />
          </Container>
          <Button
            sx={styles.cashbtn}
            onClick={() => setChangeQuanModalOpen(!changequanModalOpen)}>
            <Container
              sx={styles.cashbtntext}
              disableGutters>
              저 장
            </Container>
          </Button>
        </Container>
      </Modal>
      <Modal
        sx={styles.bunhalmodal}
        open={bunhalModalOpen}>
        <Container
          sx={styles.bunhalmodal2}
          disableGutters>
          <Container
            sx={styles.receipttitle}
            disableGutters>
            <Container
              sx={styles.rt1}
              disableGutters>
              분할 결제
            </Container>
            <Button
              sx={styles.paybtn}
              onClick={() => setBunhalModalOpen(!bunhalModalOpen)}>
              <Image
                src='./images/backb.svg'
                width={24}
                height={24}
                priority
                alt='backb'
              />
            </Button>
          </Container>
          <Container
            sx={styles.bunbtn}
            disableGutters>
            <Button sx={styles.bunbtn1}>
              <Container
                sx={styles.bunbtn1text}
                disableGutters>
                직접 입력
              </Container>
            </Button>
            <Button sx={styles.bunbtn2}>
              <Container
                sx={styles.bunbtn2text}
                disableGutters>
                더치 페이
              </Container>
            </Button>
          </Container>
          <Container
            sx={styles.ifdf}
            disableGutters>
            <Container
              sx={styles.dff}
              disableGutters>
              <Container
                sx={styles.dfftext1}
                disableGutters>
                받을 금액
              </Container>
              <Container
                sx={styles.dfftext2}
                disableGutters>
                7,000원
              </Container>
            </Container>
            <Container
              sx={styles.dff}
              disableGutters>
              <Container
                sx={styles.dfftext1}
                disableGutters>
                결제 금액
              </Container>
              <TextField
                sx={styles.ddd}
                inputProps={{
                  min: 1,
                  max: 100,
                  // type: 'number',
                  style: {
                    color: '#F00',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.5px',
                    textAlign: 'right',
                  },
                }}
                placeholder='7,000원'
                fullWidth
              />
            </Container>
            <Button sx={styles.bunhalbtn3}>
              <Container
                sx={styles.bunhalbtn3text}
                disableGutters>
                결 제
              </Container>
            </Button>
          </Container>
        </Container>
      </Modal>
    </>
  );
}
