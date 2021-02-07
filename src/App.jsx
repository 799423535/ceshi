import React, { useState, useCallback } from 'react';

const App = () => {
  //第一题数据
  const pictures = [
    {
      id: '1',
      name: 'foo',
      url: 'https://www.super-hobby.com/zdjecia/7/9/3/29984_2_tru01050_15.jpg'
    },
    {
      id: '2',
      name: 'foo',
      url: 'https://www.super-hobby.com/zdjecia/2/8/3/29984_1_tru01050_12.jpg'
    },
    {
      id: '3',
      name: 'foo',
      url: 'https://www.super-hobby.com/zdjecia/3/8/3/29984_1_tru01050_2.jpg'
    },
  ];
  //第一题value
  const [arr, setArr] = useState([]);
  //第一题方法
  const fn = useCallback((e) => {
    if (arr.includes(e.target.value)) {
      let _index = arr.indexOf(e.target.value);
      setArr((value) => {
        value.splice(_index, 1);
        return [...value];
      });
    } else {
      setArr((value) => {
        value.push(e.target.value);
        return [...value];
      });
    }
  }, []);
  //第二题方法
  const debounce = (fn, wait) => {
    let timer = null;
    return function () {
      let arg = arguments;
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(this, arg);
      }.bind(this), wait);
    }
  }
  const search = (value) => {
    console.log(value);
  }
  const debouncedSearch = debounce(search, 200);
  return (
    <>
      <div className="first" style={{ overflow: "hidden" }}>
        <h1>第一题</h1>
        {
          pictures.map((item, index) => {
            return (
              <div key={index}
                style={{ width: 100, height: 100, float: "left", margin: "0 10px", position: "relative" }}>
                <img src={item.url} alt="" style={{ width: "100%", height: "100%" }} />
                <input
                  style={{ position: "absolute", left: 0, top: 0 }}
                  type="checkbox"
                  value={item.id}
                  name={item.name}
                  checked={arr.includes(item.id)}
                  onChange={fn} />
              </div>
            )
          })
        }
      </div>
      <div className="second">
        <h1>第二题</h1>
        <input onChange={(value) => debouncedSearch(value)} />
      </div>
    </>
  );
}

export default App;
