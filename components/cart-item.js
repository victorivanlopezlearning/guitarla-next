import Image from 'next/image';
import styles from '@/styles/cart-item.module.css';

function CartItem({ item, updateQuantity, deleteItemToCart }) {
  const { imageURL, name, price, quantity, id } = item;
  return (
    <div className={styles.item}>
      <Image className={styles.image} src={imageURL} alt={`Imagen ${name}`} width={100} height={230} />

      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className="item__quantity">Cantidad:</p>
        <select
          className={`${styles['select-qty']}`}
          onChange={(e) => updateQuantity({ id, quantity: Number(e.target.value) })}
          value={quantity}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p className={styles.price}>${price} MXN</p>
        <p>Subtotal: <span className={`${styles['subtotal-span']}`}>${price * quantity} MXN</span></p>
      </div>

      <button
        type="button"
        className={`${styles['btn-delete']}`}
        onClick={() => deleteItemToCart(id)}
      >
        Eliminar
      </button>
    </div>
  )
}

export default CartItem;