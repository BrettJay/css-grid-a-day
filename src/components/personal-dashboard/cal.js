import React from "react"
import CalStyles from "./calendar.module.scss"

import Day from "./calday"

function Cal(props) {
  return (
    <div className={CalStyles.month }>
      <Day header={true}>M</Day>
      <Day header={true}>T</Day>
      <Day header={true}>W</Day>
      <Day header={true}>T</Day>
      <Day header={true}>F</Day>
      <Day header={true}>S</Day>
      <Day header={true}>S</Day>
      <Day placeholder={true}>29</Day>
      <Day placeholder={true}>30</Day>
      <Day>1</Day>
      <Day>2</Day>
      <Day>3</Day>
      <Day>4</Day>
      <Day>5</Day>
      <Day>6</Day>
      <Day>7</Day>
      <Day>8</Day>
      <Day>9</Day>
      <Day current={true}>10</Day>
      <Day>11</Day>
      <Day>12</Day>
      <Day>13</Day>
      <Day>14</Day>
      <Day>15</Day>
      <Day>16</Day>
      <Day>17</Day>
      <Day>18</Day>
      <Day>19</Day>
      <Day>20</Day>
      <Day>21</Day>
      <Day>22</Day>
      <Day>23</Day>
      <Day>24</Day>
      <Day>25</Day>
      <Day>26</Day>
      <Day>27</Day>
      <Day>28</Day>
      <Day>29</Day>
      <Day>30</Day>
      <Day>31</Day>
      <Day placeholder={true}>1</Day>
      <Day placeholder={true}>2</Day>
    </div>
  )
}

export default Cal
