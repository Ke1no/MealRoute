export interface MenuItem { id: number; name: string; description: string; price: number; image_url: string }
export interface Restaurant { id: number; name: string; address: string; phone: string; image_url: string; menu_items: MenuItem[] }
export interface CartItem { order_item_id: number; menu_item_id: number; restaurant_id: number; price: number; quantity: number; menu_item_name: string; menu_item_description: string; menu_item_image_url: string }
export interface Cart { id: number; total_price: number; order_items: CartItem[] }
export interface Credentials { username: string; password: string }
export interface SignupInput { email: string; password: string; first_name: string; last_name: string }
