import React, { lazy, Suspense } from 'react'
// import Slider from './Slider'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../../Action/CounterSlice'


const Slider = lazy(() => import('./Slider'))

function Home() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
        <Suspense fallback={<div>please wait...</div>}>
            <Slider/>
            </Suspense>
            <div className='p-4'>


                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <div className='zoom-container'>
                                <img src="images\fresh veg.jpg" className='rounded mx-auto d-block' alt="veg" width="40%" />

                            </div>

                            <div class="card-body">
                                <p className="text-center fs-5">Fresh Vegetables</p>
                                <p class="card-text text-center fw-medium text-warning blinkingText">upto 50% discount</p>
                            </div>

                            <div class="mx-auto" style={{ width: '100px' }}>
                                <button className='btn btn-danger p-2' aria-label='increment' onClick={() =>
                                    dispatch(increment())}><b>+</b></button>
                                <span className='p-2'>{count}</span>
                                <button className='btn btn-danger p-2' aria-label='decrement' onClick={() =>
                                    dispatch(decrement())}><b>-</b></button>
                            </div>

                            <div class="list-group-item d-flex justify-content-around p-2 ">
                                <button class="btn btn-primary btn-sm ">Add cart</button>
                                <button className="btn btn-danger btn-sm ">Buy Now</button>
                            </div>

                            {/* <div class="card-footer">
                        </div> */}
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="images\fresh fruits.jpg" className='rounded mx-auto d-block' alt="fruits" width="40%" />
                            <div class="card-body">
                                <p className="text-center fs-5">Fresh Fruits</p>
                                <p class="card-text text-center fw-medium text-primary-emphasis blinkingText">upto 30% discount</p>
                            </div>

                            <div class="mx-auto" style={{ width: '100px' }}>
                                <button className='btn btn-danger p-2' aria-label='increment' onClick={() =>
                                    dispatch(increment())}><b>+</b></button>
                                <span className='p-2'>{count}</span>
                                <button className='btn btn-danger p-2' aria-label='decrement' onClick={() =>
                                    dispatch(decrement())}><b>-</b></button>
                            </div>

                            <div class="list-group-item d-flex justify-content-around p-2 ">
                                <button class="btn btn-primary btn-sm ">Add cart</button>
                                <button className="btn btn-danger btn-sm ">Buy Now</button>
                            </div>

                            {/* <div class="card-footer">
                        </div> */}
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="images\snacks.jpg" className='rounded mx-auto d-block' alt="veg" width="40%" />
                            <div class="card-body">
                                <p className="text-center fs-5">Snacks and chips</p>
                                <p class="card-text text-center fw-medium text-warning-emphasis blinkingText">upto 20% discount</p>
                            </div>

                            <div class="mx-auto" style={{ width: '100px' }}>
                                <button className='btn btn-danger p-2' aria-label='increment' onClick={() =>
                                    dispatch(increment())}><b>+</b></button>
                                <span className='p-2'>{count}</span>
                                <button className='btn btn-danger p-2' aria-label='decrement' onClick={() =>
                                    dispatch(decrement())}><b>-</b></button>
                            </div>

                            <div class="list-group-item d-flex justify-content-around p-2 ">
                                <button class="btn btn-primary btn-sm ">Add cart</button>
                                <button className="btn btn-danger btn-sm ">Buy Now</button>
                            </div>

                            {/* <div class="card-footer">
                        </div> */}
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="images\mobile.jpg" className='rounded mx-auto d-block' alt="veg" width="40%" />
                            <div class="card-body">
                                <p className="text-center fs-5">Mobile Phones</p>
                                <p class="card-text text-center fw-medium text-danger blinkingText">🎇 sale start soon 🎇</p>
                            </div>

                            <div class="mx-auto" style={{ width: '100px' }}>
                                <button className='btn btn-danger p-2' aria-label='increment' onClick={() =>
                                    dispatch(increment())}><b>+</b></button>
                                <span className='p-2'>{count}</span>
                                <button className='btn btn-danger p-2' aria-label='decrement' onClick={() =>
                                    dispatch(decrement())}><b>-</b></button>
                            </div>

                            <div class="list-group-item d-flex justify-content-around p-2 ">
                                <button class="btn btn-primary btn-sm ">Add cart</button>
                                <button className="btn btn-danger btn-sm ">Buy Now</button>
                            </div>

                            {/* <div class="card-footer">
                        </div> */}
                        </div>
                    </div>
                </div></div>

        </>
    )
}

export default Home