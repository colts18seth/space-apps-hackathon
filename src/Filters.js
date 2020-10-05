import React from 'react';
import './Filters.css';

function Filters() {
    return (
        <div className="Filters col-3">
            <h3 className='pb-2'>Filter Results</h3>
            <form>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="AccountRequired" />
                    <label className="form-check-label" htmlFor="AccountRequired">
                        Account Required
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="open" />
                    <label className="form-check-label" htmlFor="open">
                        Public / Open Source
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="category" />
                    <label className="form-check-label" htmlFor="category">
                        Category (6)
                    </label>

                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="category" id="air" value="air" />
                            <label className="form-check-label" htmlFor="air">
                                Air (2)
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="category" id="land" value="land" />
                            <label className="form-check-label" htmlFor="land">
                                Land
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="category" id="sky" value="sky" />
                            <label className="form-check-label" htmlFor="sky">
                                Sky (4)
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="category" id="water" value="water" />
                            <label className="form-check-label" htmlFor="water">
                                Water (3)
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="category" id="climate" value="climate" />
                            <label className="form-check-label" htmlFor="climate">
                                Climate Change (1)
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="category" id="agriculture" value="agriculture" />
                            <label className="form-check-label" htmlFor="agriculture">
                                Agriculture
                            </label>
                        </div>

                    </div>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="type" />
                    <label className="form-check-label" htmlFor="type">
                        Type
                    </label>

                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="type" id="images" value="images" />
                            <label className="form-check-label" htmlFor="images">
                                Images
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="type" id="data" value="data" />
                            <label className="form-check-label" htmlFor="data">
                                Raw Data
                            </label>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
}

export default Filters;