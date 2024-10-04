import { useEffect, useState } from "react";
import "./modalWindow.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalWindow = (props: Props) => {
  const { isOpen, onClose } = props;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Или "auto", если вам нужно восстановить обычный скролл
      setIsSubmitted(false);
    }

    return () => {
      document.body.style.overflow = "unset"; // Убираем стиль при размонтировании
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const submitHandleForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setInputValue("");
  };
  return (
    <div onClick={onClose} className="modal-bg">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Закажите обратный звонок</h2>
          <button onClick={onClose} className="modal-close-btn">
            <img
              className="modal-btn-cross-img"
              src="./icon/icons-cross.png"
              alt=""
            />
          </button>
        </div>
        <form className="modal-form" onSubmit={submitHandleForm}>
          <p>Номер телефона:</p>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="modal-form-input"
            type="number"
          />
          <button className="modal-form-btn">Заказать</button>
          {isSubmitted && <p>Заявка на звонок отправлена</p>}
        </form>
      </div>
    </div>
  );
};
