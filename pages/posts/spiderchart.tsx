import SpiderChart from '../../components/Graph/spiderchart'

const SpiderChartPost = () => {
  let levels = 5

  const formData = {
    'Internet': [1,1,1,2,3],
    'Backend': [1,1,0,0,0],
    'Programación': [1,1,3,0,0],
    'Control Versiones': [1,1,2,3,0],
    'HTML y A11y': [1,1,1,2,3],
    'CSS': [1,1,1,2,3],
    'Javascript': [1,1,3,0,0],
    'Testing': [1,1,3,0,0],
    'Performance': [1,1,0,0,0],
    'Devops': [1,1,1,0,0],
    'Arquitectura': [1,3,0,0,0]
  }
  return <SpiderChart formData={formData}/>
}

export default SpiderChartPost;