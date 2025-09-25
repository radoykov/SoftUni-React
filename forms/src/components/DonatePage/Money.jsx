const Money = ({
    money,
    isCheckedMoney,
    onChangeMoney
}) => (
    <div className="col-lg-3 col-md-6 col-6 form-check-group">
        <div className="form-check form-check-radio">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" checked={isCheckedMoney == money} onChange={onChangeMoney} />
            <label className="form-check-label" htmlFor="flexRadioDefault6">
                ${money}
            </label>
        </div>
    </div>
);

export default Money;