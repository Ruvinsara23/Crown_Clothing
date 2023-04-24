export enum CATEGORY_TYPE {
   FETCH_CATEGORIES_START='FETCH_CATEGORIES_START',
   FETCH_CATEGORIES_SUCCESS='FETCH_CATEGORIES_SUCCESS',
   FETCH_CATEGORIES_FAILED='FETCH_CATEGORIES_FAILED'
}

export type CategoryItem={
 id:number;
 name:string;
 imageUrl:string;
 price:number;
}

export type Category={
   title:string;
   imageUrl:string;
   items:CategoryItem[]
}

export type CategoryMap={
   [key:string]:CategoryItem[]
}